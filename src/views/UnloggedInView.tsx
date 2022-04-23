import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useWeb3Auth } from "../services/web3auth";

const UnloggedInView = () => {
  const { login } = useWeb3Auth();
  return (
    <>
      <VStack align="center" justify="center">
        <Image
          src="/colorfulBackground.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Heading>Nifty Rewards</Heading>
        <Text>
          Unlock rewards and provide real world utilities for your nft
          collections with us
        </Text>

        <Button onClick={login}>Log In</Button>
      </VStack>
    </>
  );
};

export default UnloggedInView;
