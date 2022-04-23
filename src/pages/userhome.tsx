import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useWeb3Auth } from "../services/web3auth";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const Hero = () => {
  return (
    <HStack
      w="full"
      h="300px"
      p="8"
      bgImage="/assets/Banner.png"
      justify="space-between"
    >
      <VStack w="full" align="center" justify="center">
        <Heading>ADIDAS X BAYC</Heading>
        <VStack
          w="full"
          align="center"
          justify="space-around"
          textAlign="center"
        >
          <Text fontSize="7xl">10%</Text>
          <Text>OFF STOREWIDE FOOTWEAR</Text>
        </VStack>
      </VStack>
      <HStack w="full" align="center" justify="center">
        <Avatar size="3xl" name="Ryan Florence" src="/assets/ADIDAS.png" />
      </HStack>
    </HStack>
  );
};

const UserHome = () => {
  const { provider } = useWeb3Auth();

  return (
    <VStack w="full">
      <Hero />
    </VStack>
  );
};

export default UserHome;
