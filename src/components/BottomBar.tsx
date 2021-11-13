import { Button, HStack } from "@chakra-ui/react";

function BottomBar() {
  return (
    <HStack
      w="full"
      p="2rem"
      right="unset"
      left="unset"
      bottom="1rem"
      position="fixed"
      // transition="all 1s"
      align="center"
      justify="center"
      zIndex="99"
    >
      <HStack
        p="4"
        boxShadow="full"
        borderRadius="full"
        border="1px solid rgba( 50, 50, 50, 0.25 )"
        background="rgba( 25, 25, 25, 0.25 )"
        backdropFilter="blur(6px)"
      >
        <Button colorScheme="green">Hello</Button>
        <Button>Hello</Button>
      </HStack>
    </HStack>
  );
}

export default BottomBar;
