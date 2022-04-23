import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useWeb3Auth } from "../services/web3auth";

const UnloggedInView = () => {
  const { login } = useWeb3Auth();
  return (
    <>
      <VStack mt="8" px="8" py="16" borderRadius="md" bgImage="/login-bg.png" bgPos="center" bgSize="800px" align="center" justify="center">

        <Heading>Nifty Rewards</Heading>
        <Text textAlign="center">
          Unlock rewards and provide real world utilities for your nft
          collections with us
        </Text>

        <Button onClick={login}>Log In</Button>
      </VStack>
    </>
  );
};

export default UnloggedInView;
