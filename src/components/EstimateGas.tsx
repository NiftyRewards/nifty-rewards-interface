import { Text } from "@chakra-ui/react";
import axios from "axios";
import { BigNumber, ethers, Transaction, utils } from "ethers";
import { FC, useState, useEffect } from "react";

const ALCHEMY_API = process.env.NEXT_PUBLIC_ALCHEMY_API || "";

type TXFeeProps = {
  txFee: string;
  dollarPrice: string;
};

const Component: FC = () => {
  const [TXFee, setTXFee] = useState<TXFeeProps>();

  const estimateGas = async () => {
    const provider = new ethers.providers.AlchemyProvider(
      "homestead",
      ALCHEMY_API
    );

    // get base fee + priority fee
    const { baseFeePerGas } = await provider.getBlock("pending");
    const baseFeePerGasInWei = utils.formatUnits(baseFeePerGas, "wei");
    const feeData = await provider.getFeeData();
    const maxPriorityFeePerGasInWei = ethers.utils.formatUnits(
      feeData.maxPriorityFeePerGas,
      "wei"
    );

    // estimate gas limit for tx
    const transaction: Transaction = {
      from: "0xca6d44FEeE1B1E9F2f727e3C905C25Fa37E4927E",
      to: "0xB4e8AC80CbDc013F8Fc249F422bAB126e45d6D61",
      value: ethers.utils.parseEther("0.0034802"),
      data: "0x",
      nonce: 0,
      gasLimit: BigNumber.from("0x0"),
      chainId: 0,
    };
    const estimate = await provider.estimateGas(transaction);
    transaction.gasLimit = estimate;

    // set fee for tx
    const priceForTX = ethers.utils.formatEther(
      Number(estimate) *
        (Number(baseFeePerGasInWei) + Number(maxPriorityFeePerGasInWei))
    );

    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    const dollarPrice = (data.ethereum.usd * Number(priceForTX)).toFixed(2);

    setTXFee({ txFee: priceForTX, dollarPrice });
  };
  useEffect(() => {
    estimateGas();
  }, []);
  return (
    <>
      {TXFee && (
        <>
          <Text>tx fee: {TXFee.txFee}</Text>
          <Text>tx fee: {TXFee.dollarPrice}$</Text>
        </>
      )}
    </>
  );
};

export default Component;
