import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { FaPaste } from "react-icons/fa";

import ClipboardButton from "../Button/ClipboardButton";

function WhiteboardGrid() {
  const [boardValues, setBoardValues] = useState([""]);

  function updateValues(e: ChangeEvent<HTMLInputElement>, index: number) {
    const inputValue = e.target.value;
    const newArr = [...boardValues];
    newArr[index] = inputValue;

    setBoardValues(newArr);
  }

  function updateValuesFromPaste(text: string, index: number) {
    const newArr = [...boardValues];
    newArr[index] = text;

    setBoardValues(newArr);
  }

  function addBoard() {
    const newArr = [...boardValues, ""];
    setBoardValues(newArr);
  }

  async function paste(index: number) {
    const text = await navigator.clipboard.readText();
    updateValuesFromPaste(text, index);
  }

  useEffect(() => {
    setBoardValues(["alpha", "beta"]);
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="4">
      {boardValues.map((val, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Stack key={i}>
          <Text>Space {i}</Text>
          <Flex>
            <Input onChange={(e) => updateValues(e, i)} value={val} />
            <IconButton
              onClick={() => paste(i)}
              aria-label="Paste Clipboard"
              icon={<FaPaste />}
            />
          </Flex>

          <ClipboardButton value={val} text="" />
        </Stack>
      ))}

      <Box h="120px">
        <IconButton
          boxSize="full"
          borderRadius="none"
          bg="teal"
          onClick={() => addBoard()}
          aria-label="Search database"
          icon={<AddIcon />}
        />
      </Box>
    </SimpleGrid>
  );
}

export default WhiteboardGrid;
