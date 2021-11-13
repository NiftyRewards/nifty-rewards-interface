import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Web3 Converter</Link>
      </Heading>
      <HStack pl="4" spacing="4">
        <Link href="playground" passHref>
          <Text color="transparent">Playground</Text>
        </Link>
      </HStack>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
