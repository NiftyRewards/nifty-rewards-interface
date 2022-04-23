import {
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useWeb3Auth } from "../services/web3auth";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { TimeIcon, CheckCircleIcon } from "@chakra-ui/icons";
import router from "next/router";
import vouchers from "data/vouchers";

const Hero = () => {
  return (
    <HStack
      w="full"
      h="300px"
      p="8"
      bgImage="/assets/DetailsBG.png"
      justify="space-between"
    >
      <VStack w="full" align="center" justify="center">
        <Heading>Azuki x Nike</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
      </VStack>
      <HStack w="full" align="center" justify="center">
        <Avatar
          bgColor="transparent"
          size="3xl"
          name="Logos"
          src="/assets/CampaignLogos.png"
        />
      </HStack>
    </HStack>
  );
};

const NFTDetails = () => {
  return (
    <HStack w="full" p="8" align="start">
      <VStack px="4">
        <Heading>eligible NFTs</Heading>
        <HStack>
          <Card />
          <Card />
        </HStack>
      </VStack>
      <VStack>
        <Heading>More Information</Heading>
        <VStack w="full" align="start">
          <Text>
            <Box textColor="primary.400">Location:</Box> WOrldwide official nike
            stores
          </Text>
          <Text>
            <Box textColor="primary.400">start date:</Box> 21/04/2022
          </Text>
          <Text>
            <Box textColor="primary.400">end date:</Box> 25/04/2022
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

const Card = () => {
  return (
    <VStack w="full" justify="center" bg="gray.800" borderRadius="lg">
      <Image
        width="full"
        objectFit="contain"
        src="/assets/azuki1.png"
        alt="Card Image"
        // borderRadius="8"
      />
      <Box w="full" textAlign="center">
        <Text>azuki #9647</Text>
      </Box>
    </VStack>
  );
};

const Vouchers = () => {
  return (
    <VStack w="full" justify="center">
      <Heading>Available vouchers</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        {vouchers.map((voucher) => (
          <VStack
            bg="primary.400"
            borderRadius="lg"
            h="120px"
            alignItems="center"
            justify="center"
            p="4"
          >
            <Text color="black">{voucher.text}</Text>
            <Text color="black" fontSize="small">{voucher.text2}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

const Details = () => {
  return (
    <VStack w="full">
      <Hero />
      <NFTDetails />
      <Vouchers />
    </VStack>
  );
};

export default Details;
