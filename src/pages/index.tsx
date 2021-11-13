import { Divider, Heading, VStack } from "@chakra-ui/react";

import EtherWeiConverter from "../components/layout/EtherWeiConverter";
import StringHexConverter from "../components/layout/StringHexConverter";
import WhiteboardGrid from "../components/layout/WhiteboardGrid";

const Home = () => {
  return (
    <VStack>
      <Heading>bytes32/hex - string/utf8</Heading>
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
