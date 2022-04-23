import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import LoggedInView from "views/LoggedInView";
import UnloggedInView from "views/UnloggedInView";
// import AuthComponent from "../components/AuthComponent";
// import dynamic from "next/dynamic";
// const AuthComponent = dynamic(() => import("../components/AuthComponent"), {
//   ssr: false,
// });
import { useWeb3Auth } from "../services/web3auth";

const Home = () => {
  const {
    provider,
    // login,
    // logout,
    // getUserInfo,
    // getAccounts,
    // getBalance,
    // signMessage,
    // signTransaction,
    // signAndSendTransaction,
    // web3Auth,
    // chain,
  } = useWeb3Auth();

  return (
    <VStack>
      <Heading>Heading</Heading>
      {provider ? <LoggedInView /> : <UnloggedInView />}
    </VStack>
  );
};

export default Home;
