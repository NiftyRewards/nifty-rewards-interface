import { Text, Input, Button, Stack, useToast, HStack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import web3 from "web3";

const NUMBER_REGEX = "^-?[0-9.]+$";

function EtherWeiConverter() {
  const [weiValue, setWeiValue] = useState("");
  const [ethValue, setEthValue] = useState("");
  const toast = useToast();

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
    return (
      <CopyToClipboard
        text={inWei}
        onCopy={() =>
          toast({
            title: `Copied ${inWei} in clipboard`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        <Button>Copy {value}Ξ in wei</Button>
      </CopyToClipboard>
    );
  };

  return (
    <Stack w="100%">
      <Text>Ether</Text>
      <Input onChange={(e) => convertToWei(e)} value={ethValue} />
      <CopyToClipboard
        text={ethValue}
        onCopy={() =>
          toast({
            title: `Copied ${ethValue} in clipboard`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        <Button>Copy Ether</Button>
      </CopyToClipboard>
      <Text>Wei</Text>
      <Input onChange={(e) => convertToEther(e)} value={weiValue} />
      <CopyToClipboard
        text={weiValue}
        onCopy={() =>
          toast({
            title: `Copied ${weiValue} in clipboard`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        <Button>Copy Wei</Button>
      </CopyToClipboard>
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
