import { Divider, Heading, VStack, Text } from "@chakra-ui/react";

import EstimateGas from "../components/EstimateGas";
import EtherWeiConverter from "../components/EtherWeiConverter";
import StringHexConverter from "../components/StringHexConverter";
import WhiteboardGrid from "../components/WhiteboardGrid";

const Home = () => {
  return (
    <VStack>
      <EstimateGas />
      <Heading>bytes32/hex - string/utf8</Heading>
      <Text>https://www.epochconverter.com/</Text>
      <StringHexConverter />
      <Divider py="4" />
      <Heading>wei - ether</Heading>
      <EtherWeiConverter />
      <Divider py="4" />
      <Heading>Whiteboard</Heading>
      <WhiteboardGrid />
    </VStack>
  );
};

export default Home;
