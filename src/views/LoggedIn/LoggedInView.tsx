import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useWeb3Auth } from "../../services/web3auth";
import { useState, useEffect } from "react";
import WalletConnectView from "views/LoggedIn/WalletConnectView";

const LoggedInView = () => {
  const { provider, logout, getUserInfo, getAccounts, getBalance } =
    useWeb3Auth();
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

  const getInfos = async () => {
    const userInfo = await getUserInfo();
    const accounts = await getAccounts();
    const balance = await getBalance();
    console.log({ userInfo });
    console.log({ accounts });
    console.log({ balance });
  };
  useEffect(() => {
    if (provider) {
      getInfos();
    }
  }, [provider]);

  return (
    <>
      <VStack
        mt="8"
        px="8"
        py="16"
        borderRadius="md"
        bgImage="/login-bg.png"
        bgPos="center"
        bgSize="800px"
        align="center"
        justify="center"
      >
        <Heading color="primary.400">Bind your web3 wallet</Heading>
        <Text textAlign="center">
          verify your web3 wallet on our platform to bind your nft wallet Find
          out more
        </Text>
      </VStack>
      <WalletConnectView />
    </>
  );
};

export default LoggedInView;
