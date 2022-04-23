import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useWeb3Auth } from "../services/web3auth";

const LoggedInView = () => {
  const { logout } = useWeb3Auth();
  return (
    <>
      <VStack align="center" justify="center">
        <Heading>Bind your web3 wallet</Heading>
        <Text>
          verify your web3 wallet on our platform to bind your nft wallet Find
          out more
        </Text>

        <Button onClick={logout}>Log Out</Button>
      </VStack>
    </>
  );
};

export default LoggedInView;
