import {
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useWeb3Auth } from "../services/web3auth";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { TimeIcon, CheckCircleIcon } from "@chakra-ui/icons";
import router from "next/router";

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
        <Avatar bgColor="transparent" size="3xl" name="Logos" src="/assets/HeroLogos.png" />
      </HStack>
    </HStack>
  );
};

const Cards = () => {
  return (
    <VStack w="full" p="8" align="start">
      <Heading>available campaigns for you</Heading>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </VStack>
  );
};

const Card = () => {
  return (
    <VStack w="full" bg="tomato" layerStyle="solid-hover2" justify="center">
      <Image
        width="full"
        objectFit="contain"
        src="/CardImage.png"
        alt="Card Image"
        borderRadius="8"
      />
      <Heading>Azuki x nike</Heading>
      <Text>10% off footwear 30% off apparels free one month membership</Text>
      <HStack>
        <TimeIcon w={6} h={6} />
        <Text fontSize="small" color="gray.200">
          5 days 4 hours
        </Text>
        <CheckCircleIcon w={6} h={6} />
        <Text fontSize="small" color="gray.200">
          300 redeemed
        </Text>
      </HStack>
      <Button
        w="full"
        onClick={() => {
          router.push("/details");
        }}
      >
        View
      </Button>
    </VStack>
  );
};

const UserHome = () => {
  // const { provider } = useWeb3Auth();

  return (
    <VStack w="full">
      <Hero />
      <Cards />
    </VStack>
  );
};

export default UserHome;
