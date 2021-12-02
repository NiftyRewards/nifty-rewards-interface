import { VStack, Box, Button, useColorMode } from "@chakra-ui/react";

import useClicks from "../hooks/useClicks";
import useInsertClicks from "../hooks/useInsertClicks";
import useColors from "hooks/useColors";

const buttons = [
  {
    type: "happy",
    label: "😊",
  },
  {
    type: "sad",
    label: "😞",
  },
  {
    type: "party",
    label: "🎉",
  },
  {
    type: "love",
    label: "❤️",
  },
];

const Supa = () => {
  const { toggleColorMode } = useColorMode();
  const { bg, color } = useColors();

  const clicks = useClicks();
  const insertClicks = useInsertClicks();
  const clickedButton = (type: string) => () => insertClicks([{ type }]);

  return (
    <VStack>
      <Box mb={4} bg={bg} color={color}>
        This box style will change based on the color mode.
      </Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
      {buttons.map((button) => {
        const clicksForType =
          clicks?.filter((c) => c.type === button.type).length || 0;
        return (
          <Button onClick={clickedButton(button.type)}>
            <span>{clicksForType}</span>
            <span>{button.label}</span>
          </Button>
        );
      })}
    </VStack>
  );
};

export default Supa;
