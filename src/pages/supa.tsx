import { VStack, Box, Button, useColorMode } from "@chakra-ui/react";

import useColors from "hooks/useColors";

const Supa = () => {
  const { toggleColorMode } = useColorMode();
  const { bg, color } = useColors();

  return (
    <VStack>
      {" "}
      <Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </VStack>
  );
};

export default Supa;
