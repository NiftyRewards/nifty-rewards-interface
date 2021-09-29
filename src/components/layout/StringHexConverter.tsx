import { Text, Input, Button, Stack, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import web3 from "web3";

type ClipboardButtonProps = {
  value: string;
  text: string;
};

function StringHexConverter() {
  const [stringInput, setStringInput] = useState("");
  const [hexInput, setHexInput] = useState("");
  const toast = useToast();

  function convertToHex(e: ChangeEvent<HTMLInputElement>) {
    const stringValue = e.target.value;
    setStringInput(stringValue);

    const converted = web3.utils.toHex(stringValue);
    const outputLength = 66;

    if (converted.length <= outputLength) {
      const zerosLength = outputLength - converted.length;
      const zeros = new Array(zerosLength + 1).join("0");
      setHexInput(converted.concat(zeros));
    } else {
      setHexInput(converted);
    }
  }

  function convertStringToHex(value: string) {
    setStringInput(value);

    const converted = web3.utils.toHex(value);
    const outputLength = 66;

    if (converted.length <= outputLength) {
      const zerosLength = outputLength - converted.length;
      const zeros = new Array(zerosLength + 1).join("0");
      setHexInput(converted.concat(zeros));
    } else {
      setHexInput(converted);
    }
  }

  function convertToString(e: ChangeEvent<HTMLInputElement>) {
    const hexValue = e.target.value;
    setHexInput(hexValue);

    const isHex = hexValue.match("^0x[0-9a-fA-F]+$");

    if (isHex !== null) {
      const converted = web3.utils.hexToString(hexValue);
      setStringInput(converted);
    } else {
      setStringInput("Not a Hex value");
    }
  }

  useEffect(() => {
    return convertStringToHex("Hello World");
  }, []);

  const ClipboardButton = ({ value, text }: ClipboardButtonProps) => (
    <CopyToClipboard
      text={value}
      onCopy={() =>
        toast({
          title: `Copied ${value} in clipboard`,
          status: "success",
          duration: 2000,
        })
      }
    >
      <Button>Copy {text}</Button>
    </CopyToClipboard>
  );

  return (
    <Stack w="100%">
      <Text>String</Text>
      <Input onChange={(e) => convertToHex(e)} value={stringInput} />
      <ClipboardButton value={stringInput} text="String" />

      <Text>Hex</Text>
      <Input onChange={(e) => convertToString(e)} value={hexInput} />
      <ClipboardButton value={hexInput} text="Hex" />
    </Stack>
  );
}

export default StringHexConverter;
