import { Box, Flex, Heading, Container, HStack, Text } from "@chakra-ui/react";
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
    <Flex
      as="nav"
      w="100%"
      position="fixed"
      top="0"
      backdropFilter="blur(10px)"
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="7xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <HStack pl="4" spacing="4">
          <Link href="/">Web3 Converter</Link>
          <LinkItem href="/polkatools">Polkatools</LinkItem>
        </HStack>
        <Box marginLeft="auto">
          <ThemeToggle />
        </Box>
      </Container>
    </Flex>
  );
};

export default Header;
