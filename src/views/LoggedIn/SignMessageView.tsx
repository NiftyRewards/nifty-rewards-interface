import { Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Web3 from "web3";
import axios from "axios";
import router from "next/router";
import { useWeb3Auth } from "../../services/web3auth";

const SignMessageView = ({ connector, address_to_bind }) => {
  const { web3Auth } = useWeb3Auth();
  const [address_w3a, setAddressW3A] = useState("");
  const getInfos = async () => {
    const web3 = new Web3();
    let account_w3a = (await web3.eth.getAccounts())[0];

    console.log("pubKey", account_w3a); // <-- the public key
    setAddressW3A(account_w3a);
  };

  getInfos();

  // useEffect(() => {
  //   if (provider) {
  //     getInfos();
  //   }
  // }, [provider]);

  const signTypedMessage = () => {
    // Draft Message Parameters
    const typedData = {
      types: {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
        ],
        BindingRequest: [
          { name: "address_w3a", type: "address" },
          { name: "address_b", type: "address" },
        ],
      },
      primaryType: "BindingRequest",
      domain: {
        name: "NiftyRewards",
        version: "1.0",
        chainId: 1,
      },
      message: {
        address_w3a: address_w3a,
        address_to_bind: address_to_bind,
      },
    };
    console.log("🚀 | signTypedMessage | typedData", typedData);

    const msgParams = [
      "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3", // Required
      JSON.stringify(typedData), // Required
    ];

    // Sign Typed Data
    connector
      .signTypedData(msgParams)
      .then((result) => {
        // Returns signature.
        console.log(result);
        router.push("/userhome");

        // TODO: Call https://nifty-rewards.herokuapp.com/users/bind/:address_w3a/:address_to_bind
        axios
          .post(
            `https://nifty-rewards.herokuapp.com/users/bind/${address_w3a}/${address_to_bind}`
          )
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
      })
      .catch((error) => {
        // Error returned when rejected
        console.error(error);
      });
  };
  return (
    <>
      <Heading pt="8" color="primary.400">
        Verify wallet
      </Heading>
      <Text textAlign="center">
        signing the message essentially proves that you are indeed the owner of
        the wallet address niftyrewards will not perform any transactions or
        require any approval from you.
      </Text>
      <Button onClick={signTypedMessage}>Sign Message</Button>
    </>
  );
};

export default SignMessageView;
