import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import WalletConnectView from "views/LoggedIn/WalletConnectView";
import Web3 from "web3";
import { useWeb3Auth } from "../../services/web3auth";

const LoggedInView = () => {
  const { provider, logout, getUserInfo, getAccounts, getBalance, web3Auth } =
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
    const web3 = new Web3(web3Auth.provider);
    const accounts = await web3.eth.getAccounts();
    console.log("🚀 | getInfos | accounts", accounts[0]);
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
