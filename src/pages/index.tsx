import { VStack, Heading, Divider } from "@chakra-ui/react";

import EtherWeiConverter from "../components/layout/EtherWeiConverter";
import StringHexConverter from "../components/layout/StringHexConverter";

const Home = () => {
  return (
    <VStack>
      <Heading>bytes32/hex - string/utf8</Heading>
      <StringHexConverter />
      <Divider py="4" />
      <Heading>wei - ether</Heading>
      <EtherWeiConverter />
    </VStack>
  );
};

export default Home;
