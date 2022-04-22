import { Divider, Heading, VStack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack>
      <Heading>bytes32/hex - string/utf8</Heading>
      <Text>https://www.epochconverter.com/</Text>
      <Divider py="4" />
      <Heading>wei - ether</Heading>
      <Divider py="4" />
      <Heading>Whiteboard</Heading>
    </VStack>
  );
};

export default Home;
