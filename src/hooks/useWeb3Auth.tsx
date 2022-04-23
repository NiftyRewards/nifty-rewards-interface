import { Web3Auth } from "@web3auth/web3auth";
import {
  CHAIN_NAMESPACES,
  CONNECTED_EVENT_DATA,
  CustomChainConfig,
} from "@web3auth/base";

import { ADAPTER_EVENTS } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";

import { useState, useEffect } from "react";

function useWeb3Auth() {
  const [web3Auth, setWeb3Auth] = useState<Web3Auth>();
  async function initAuth() {
    const ethChainConfig: CustomChainConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x4",
      rpcTarget: `https://rinkeby.infura.io/v3/cf8a5d95c63d455b92265f8b63c9db70`,
      displayName: "rinkeby",
      blockExplorer: "https://rinkeby.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum",
    };

    // We are initializing with EIP155 namespace which
    // will initialize the modal with ethereum mainnet
    // by default.
    const web3auth = new Web3Auth({
      chainConfig: ethChainConfig,
      clientId:
        "BIN_cXwU2JhAO91Lw5vJ017AryNCfPpRk-b9nR-pYk5Vyyk9wl-RywC8z7e9HofhexKBtuYbI1pYmM1Zof06yMQ", // get your clientId from https://developer.web3auth.io
    });

    // initializing the default modal
    await web3auth.initModal();

    subscribeAuthEvents(web3auth);

    setWeb3Auth(web3Auth);
  }

  function subscribeAuthEvents(web3auth: Web3Auth) {
    web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
      console.log("Yeah!, you are successfully logged in", data);
    });

    web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("connecting");
    });

    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      console.log("disconnected");
    });

    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("some error or user have cancelled login request", error);
    });

    web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
      console.log("modal visibility", isVisible);
    });
  }

  useEffect(() => {
    console.log("web3auth hook");
    if (window) {
      initAuth();
    }
  }, []);

  return web3Auth;
}

export default useWeb3Auth;
