import { IconButton, Button, HStack } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";

function BottomBar() {
  return (
    <HStack
      display={["flex", "none", "none"]}
      w="full"
      p="2"
      right="0"
      left="0"
      bottom="0"
      position="fixed"
      // transition="all 1s"
      align="center"
      justify="center"
      zIndex="sticky"
    >
      <HStack
        px="4"
        w="sm"
        boxShadow="full"
        borderRadius="full"
        border="1px solid rgba( 50, 50, 50, 0.25 )"
        backdropFilter="blur(10px)"
        justify="space-between"
      >
        <Button variant="unstyled">Connect</Button>
        <IconButton
          variant="unstyled"
          aria-label="Menu"
          icon={<HiDotsVertical />}
        />
      </HStack>
    </HStack>
  );
}

export default BottomBar;
