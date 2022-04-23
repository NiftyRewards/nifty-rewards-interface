import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import LoggedInView from "views/LoggedIn/LoggedInView";
import UnloggedInView from "views/UnloggedInView";
import { useWeb3Auth } from "../services/web3auth";

const Home = () => {
  const { provider } = useWeb3Auth();

  return (
    <VStack>
      <Text>Hello World</Text>
    </VStack>
  );
};

export default Home;
