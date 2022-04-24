import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWeb3Auth } from "../../services/web3auth";
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

const LinkItems = () => {
  return (
    <>
      <LinkItem href="/">Home</LinkItem>
      <LinkItem href="/userhome">Explore</LinkItem>
      <LinkItem href="/analytics">Analytics</LinkItem>
      <LinkItem href="/profile">Profile</LinkItem>
    </>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { provider, logout } = useWeb3Auth();

  return (
    <Box
      as="nav"
      w="100%"
      position="fixed"
      top="0"
      backdropFilter="blur(10px)"
      // zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="7xl"
        alignItems="center"
        justifyContent="space-between"
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
          {/* <Link href="/">Nifty Rewards</Link> */}
          <Image
            width="30px"
            objectFit="contain"
            src="/LOGO2.png"
            alt="Logo"
          />
          <HStack pl="4" spacing="4" display={{ base: "none", md: "flex" }}>
            <LinkItems />
          </HStack>
        </HStack>
        <HStack marginLeft="auto">
          <ThemeToggle />
          {provider && <Button onClick={logout}>Log Out</Button>}
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
