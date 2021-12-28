import {
  Box,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";

function Impermanentloss() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [poolValue, setPoolValue] = useState(1);
  const [heldValue, setHeldValue] = useState(1);
  const [IL, setIL] = useState("");

  function calculateImpermanentLoss(
    valueFromPercentage: number,
    valueX: number
  ) {
    let v1;
    let v2;
    if (valueX === 1) {
      v1 = valueFromPercentage;
      v2 = value2;
    } else {
      v1 = value1;
      v2 = valueFromPercentage;
    }
    const pValue = v1 ** 0.5 * v2 ** 0.5;
    const hValue = v1 * 0.5 + v2 * 0.5;
    setPoolValue(pValue);
    setHeldValue(hValue);
    const iLoss = pValue / hValue - 1;
    setIL((iLoss * 100).toFixed(2));
  }

  const CalculatingIL = () => {
    return (
      <>
        <Text fontWeight="bold"> Calculating Value of Pool</Text>
        <Text>{`${poolValue.toFixed(
          2
        )} = ${value1} ** 0.5 * ${value2} ** 0.5`}</Text>
        <Text fontWeight="bold"> Calculating Asset Value if Held</Text>
        <Text>{`${heldValue.toFixed(
          2
        )} = ${value1} x 0.5 + ${value2} x 0.5`}</Text>
      </>
    );
  };

  const handleValue1 = (value: string) => {
    const valueFromPercentage = +value / 100 + 1;
    setValue1(valueFromPercentage);
    calculateImpermanentLoss(valueFromPercentage, 1);
  };

  const handleValue2 = (value: string) => {
    const valueFromPercentage = +value / 100 + 1;
    setValue2(valueFromPercentage);
    calculateImpermanentLoss(valueFromPercentage, 2);
  };

  return (
    <VStack align="start">
      <Heading pb="8">Impermanent loss calculator</Heading>
      <Text>Input Price Change</Text>
      <Text>Token A in %</Text>
      <NumberInput
        step={10}
        onChange={handleValue1}
        defaultValue={0}
        min={-100}
        allowMouseWheel
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Token B in %</Text>
      <NumberInput
        step={10}
        onChange={handleValue2}
        defaultValue={0}
        min={-100}
        allowMouseWheel
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Calculation Info
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CalculatingIL />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text fontWeight="bold">Impermanent Loss</Text>
      <Box w="full" p="4" bg="teal.400" borderRadius="8">
        <Text fontWeight="bold">{IL}%</Text>
      </Box>
      <Text>If initial value equal $500 of Token A and $500 of Token B </Text>
      <Text>Value if held: ${(heldValue * 1000).toFixed(2)} </Text>
      <Text>
        Value if providing liquidity: ${(poolValue * 1000).toFixed(2)}{" "}
      </Text>
      <Box p="4" bg="teal.400" borderRadius="xl">
        <Text fontWeight="bold">
          Multiplier LP to Initial: {poolValue.toFixed(2)}
        </Text>
      </Box>
    </VStack>
  );
}

export default Impermanentloss;
