import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import LoggedInView from "views/LoggedInView";
import UnloggedInView from "views/UnloggedInView";
import WalletConnectView from "views/WalletConnectView";
import { useWeb3Auth } from "../services/web3auth";

const Home = () => {
  const { provider } = useWeb3Auth();

  return (
    <VStack>
      <Heading>Heading</Heading>
      {provider ? (
        <>
          <LoggedInView />
          <WalletConnectView />
        </>
      ) : (
        <UnloggedInView />
      )}
    </VStack>
  );
};

export default Home;
