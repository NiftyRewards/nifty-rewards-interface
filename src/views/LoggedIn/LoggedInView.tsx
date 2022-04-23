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
      <VStack pt="8" align="start" justify="center">

        <Heading>Bind your web3 wallet</Heading>
        <Text>
          verify your web3 wallet on our platform to bind your nft wallet Find
          out more
        </Text>
        <WalletConnectView />
      </VStack>
    </>
  );
};

export default LoggedInView;
