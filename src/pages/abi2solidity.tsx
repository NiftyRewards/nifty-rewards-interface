import {
  Textarea,
  Text,
  Heading,
  VStack,
  useClipboard,
  Button,
} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";
import ABI2Solidity from "utils/abi2solidity";

const Abi2solidity = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const { hasCopied, onCopy } = useClipboard(output);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    const out = ABI2Solidity(inputValue);
    setOutput(out);
    console.log("out", out);
  };

  return (
    <VStack>
      <Heading>Abi2solidity</Heading>
      <Text fontWeight="bold">Convert an ABI to a Solidity interface</Text>
      <Textarea
        height={200}
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
      />
      <Button onClick={onCopy}>{hasCopied ? "Copied" : "Copy"}</Button>
      <Textarea height={400} value={output} readOnly />
    </VStack>
  );
};

export default Abi2solidity;
