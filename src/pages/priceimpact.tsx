import {
  NumberInput,
  NumberInputField,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const PriceImpact = () => {
  const [totalPoolSize, setTotalPoolSize] = useState(100000);
  const [constValue, setConstValue] = useState(0);

  const onPoolSizeAChange = (value: string) => {
    setTotalPoolSize(+value);

    const halfPool = +value / 2;
    const cValue = halfPool * halfPool;
    setConstValue(cValue);
  };

  const onSwap = (swapAmount: string) => {
    const halfPoolA = totalPoolSize / 2;
    const newHalfPoolB = constValue / (halfPoolA + +swapAmount);
    console.log(`newTokenB `, newHalfPoolB);
  };

  const calcImpact = (swapAmount: string) => {
    const halfPoolA = totalPoolSize / 2;

    const pImpact = (halfPoolA - +swapAmount) ** 2 / halfPoolA ** 2 - 1;
    console.log(`newTokenB `, pImpact);
  };

  return (
    <VStack>
      <Heading>Price Impact</Heading>
      <Text fontWeight="bold"> Total Pool Size</Text>
      <NumberInput
        onChange={onPoolSizeAChange}
        defaultValue={totalPoolSize}
        allowMouseWheel
      >
        <NumberInputField />
      </NumberInput>
      <Text fontWeight="bold"> Amount to Swap</Text>
      <NumberInput onChange={calcImpact} defaultValue={100} allowMouseWheel>
        <NumberInputField />
      </NumberInput>
    </VStack>
  );
};

export default PriceImpact;
