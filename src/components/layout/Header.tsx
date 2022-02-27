import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import ConnectCard from "../ConnectCard";

import ThemeToggle from "./ThemeToggle";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const LinkItems = () => {
  return (
    <>
      <LinkItem href="/polkatools">Polkatools</LinkItem>
      <LinkItem href="/impermanentloss">IL Calc</LinkItem>
      <LinkItem href="/supa">Supa</LinkItem>
      <LinkItem href="/playground">.</LinkItem>
      <LinkItem href="/abi2solidity">abi2solidity</LinkItem>
    </>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
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
        <IconButton
          size="md"
          px="2"
          mr="2"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} alignItems="center">
          <Link href="/">Web3 Converter</Link>
          <HStack pl="4" spacing="4" display={{ base: "none", md: "flex" }}>
            <LinkItems />
          </HStack>
        </HStack>
        <HStack marginLeft="auto">
          <ConnectCard />
          <ThemeToggle />
        </HStack>
      </Container>

      {isOpen ? (
        <Box p={4} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen}>
          <Stack as="nav" spacing={4}>
            <LinkItems />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
