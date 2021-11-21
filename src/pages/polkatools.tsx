import { Input, Switch, Heading, Text, VStack } from "@chakra-ui/react";
import * as polkadotUtils from "@polkadot/util";
import * as polkadotCryptoUtils from "@polkadot/util-crypto";
import { useCallback, useState, useMemo } from "react";

import ClipboardButton from "../components/Button/ClipboardButton";

/**
 * The address format used in Substrate-based chains is SS58. SS58 is a modification of Base-58-check from Bitcoin with some minor changes.
 *
 * Polkadot addresses always start with the number 1.
 * Kusama addresses always start with a capital letter, such as C D, F, G, H, J.
 * Generic Substrate addresses always start with the number 5.
 */
const SS58_PREFIX = 5;

function Polkatools() {
  const [addressType, setAddressType] = useState<"H160" | "SS58">("H160");
  const [addressInput, setAddressInput] = useState<string>("");
  const [addressPrefix, setAddressPrefix] = useState(SS58_PREFIX);

  const plmToEvm = useCallback(() => {
    if (
      addressInput &&
      addressType === "SS58" &&
      polkadotCryptoUtils.checkAddress(addressInput, addressPrefix)[0]
    ) {
      return polkadotUtils.u8aToHex(
        polkadotCryptoUtils.addressToEvm(addressInput, true)
      );
    }
    return "invalid";
  }, [addressInput, addressType, addressPrefix]);

  const evmToPlm = useCallback(() => {
    if (
      addressInput &&
      addressType === "H160" &&
      polkadotCryptoUtils.isEthereumChecksum(addressInput)
    ) {
      return polkadotCryptoUtils.evmToAddress(addressInput, addressPrefix);
    }
    return "invalid";
  }, [addressInput, addressPrefix, addressType]);

  const resultAddress = useMemo(() => {
    if (addressType === "H160") return evmToPlm();
    return plmToEvm();
  }, [evmToPlm, plmToEvm, addressType]);

  return (
    <VStack align="start">
      <Heading pb="8">EVM Substrate address converter</Heading>
      <Text>Current address scheme: {addressType}</Text>
      <Switch
        onChange={() => {
          if (addressType === "H160") setAddressType("SS58");
          else setAddressType("H160");
        }}
      />
      <Text>Change address prefix</Text>
      <Input
        type="text"
        value={addressPrefix}
        onChange={(e) => setAddressPrefix(Number.parseInt(e.target.value, 10))}
      />
      <Text>Input address</Text>
      <Input
        type="text"
        value={addressInput}
        onChange={(e) => setAddressInput(e.target.value)}
      />
      <Text>{resultAddress}</Text>
      <ClipboardButton value={resultAddress} text="" />
    </VStack>
  );
}

export default Polkatools;
