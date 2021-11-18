import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";

const LinkItem = ({ href, children, ...props }: any) => {
  const { pathname } = useRouter();

  let isActive = false;
  if (href === pathname) {
    isActive = true;
  }

  return (
    <Text color={isActive ? "teal.300" : ""}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </Text>
  );
};

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Web3 Converter</Link>
      </Heading>
      <HStack pl="4" spacing="4">
        <LinkItem href="/polkatools">Polkatools</LinkItem>
      </HStack>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
