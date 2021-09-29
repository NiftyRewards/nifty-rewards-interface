import { Text, Input, Stack, HStack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import web3 from "web3";

import ClipboardButton from "../Button/ClipboardButton";

const NUMBER_REGEX = "^-?[0-9.]+$";

function EtherWeiConverter() {
  const [weiValue, setWeiValue] = useState("");
  const [ethValue, setEthValue] = useState("");

  function convertToWei(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setEthValue(inputValue);

    const isNumber = inputValue.match(NUMBER_REGEX);
    if (isNumber !== null) {
      const converted = web3.utils.toWei(inputValue);
      setWeiValue(converted);
    } else {
      setWeiValue("Not a valid value");
    }
  }

  function convertToEther(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setWeiValue(inputValue);

    const isNumber = inputValue.match(NUMBER_REGEX);
    if (isNumber !== null) {
      const converted = web3.utils.fromWei(inputValue);
      setEthValue(converted);
    } else {
      setEthValue("Not a valid value");
    }
  }

  function getWei(value: string) {
    const isNumber = value.match(NUMBER_REGEX);
    if (isNumber !== null) {
      const inWei = web3.utils.toWei(value);
      return inWei || "";
    }
    return "";
  }

  const GetWeiButton = ({ value }: { value: string }) => {
    const inWei = getWei(value);
    return <ClipboardButton value={inWei} text={value.concat("Ξ in wei")} />;
  };

  return (
    <Stack w="100%">
      <Text>Ether</Text>
      <Input onChange={(e) => convertToWei(e)} value={ethValue} />
      <ClipboardButton value={ethValue} text="Ether" />
      <Text>Wei</Text>
      <Input onChange={(e) => convertToEther(e)} value={weiValue} />
      <ClipboardButton value={weiValue} text="Wei" />
      {/* {ClipboardButton({ value: "0.01" })} */}
      <HStack justify="space-between">
        <GetWeiButton value="1" />
        <GetWeiButton value="0.1" />
        <GetWeiButton value="0.01" />
        <GetWeiButton value="0.001" />
      </HStack>
    </Stack>
  );
}

export default EtherWeiConverter;
