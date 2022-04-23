import { Button, Heading, VStack, Text } from "@chakra-ui/react";
// import AuthComponent from "../components/AuthComponent";
import dynamic from "next/dynamic";
const AuthComponent = dynamic(() => import("../components/AuthComponent"), {
  ssr: false,
});
import { useWeb3Auth } from "../services/web3auth";

const Home = () => {
  const {
    provider,
    login,
    logout,
    getUserInfo,
    getAccounts,
    getBalance,
    signMessage,
    signTransaction,
    signAndSendTransaction,
    web3Auth,
    chain,
  } = useWeb3Auth();

  const loggedInView = <Button onClick={logout}>Log Out</Button>;

  const unloggedInView = <Button onClick={login}>Log In</Button>;

  return (
    <VStack>
      <Heading>Heading</Heading>
      {provider ? loggedInView : unloggedInView}
      <Text>Text</Text>
      <Button>Button</Button>
      <AuthComponent />
    </VStack>
  );
};

export default Home;
