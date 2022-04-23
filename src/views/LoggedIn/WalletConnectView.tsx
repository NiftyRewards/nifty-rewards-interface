import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { IAssetData } from "../../helpers/types";
import { IInternalEvent } from "@walletconnect/types";
import QRCodeModal from "@walletconnect/qrcode-modal";
import SignMessageView from "./SignMessageView";
import WalletConnect from "@walletconnect/client";
import { apiGetAccountAssets } from "../../helpers/api";

interface IAppState {
  connector: WalletConnect | null;
  fetching: boolean;
  connected: boolean;
  chainId: number;
  showModal: boolean;
  pendingRequest: boolean;
  uri: string;
  accounts: string[];
  address: string;
  result: any | null;
  assets: IAssetData[];
}

const INITIAL_STATE: IAppState = {
  connector: null,
  fetching: false,
  connected: false,
  chainId: 1,
  showModal: false,
  pendingRequest: false,
  uri: "",
  accounts: [],
  address: "",
  result: null,
  assets: [],
};

const WalletConnectView = () => {
  //   const [connector, setConnector] = useState<WalletConnect>();
  const [state, setState] = useState<IAppState>({ ...INITIAL_STATE });

  const connect = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    await setState({ ...state, connector });

    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    } else {
      killSession();
    }

    // subscribe to events
    console.log("before subscribeToEvents");
    await subscribeToEvents();
  };

  useEffect(() => {
    subscribeToEvents();
  }, [state.connector]);

  const subscribeToEvents = () => {
    console.log("subscribeToEvents");
    if (!state.connector) {
      return;
    }

    state.connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`);
      console.log("session_update" + payload.params[0]);
      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      onSessionUpdate(accounts, chainId);
    });

    state.connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);

      if (error) {
        throw error;
      }

      onConnect(payload);
    });

    state.connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`);

      if (error) {
        throw error;
      }

      onDisconnect();
    });

    if (state.connector.connected) {
      const { chainId, accounts } = state.connector;
      const address = accounts[0];
      setState({ ...state, connected: true, chainId, accounts, address });
      onSessionUpdate(accounts, chainId);
    }
  };

  const killSession = async () => {
    const { connector } = state;
    if (connector) {
      connector.killSession();
    }
    resetApp();
  };

  const resetApp = async () => {
    await setState({ ...INITIAL_STATE });
  };

  const onConnect = async (payload: IInternalEvent) => {
    console.log({ payload });
    const { chainId, accounts } = payload.params[0];
    const address = accounts[0];
    await setState({ ...state, connected: true, chainId, accounts, address });
    getAccountAssets();
  };

  const onDisconnect = async () => {
    resetApp();
  };

  const onSessionUpdate = async (accounts: string[], chainId: number) => {
    const address = accounts[0];
    await setState({ ...state, chainId, accounts, address });
    await getAccountAssets();
  };

  const getAccountAssets = async () => {
    const { address, chainId } = state;
    setState({ ...state, fetching: true });
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);

      await setState({ ...state, fetching: false, address, assets });
    } catch (error) {
      console.error(error);
      await setState({ ...state, fetching: false });
    }
  };

  const toggleModal = () => setState({ ...state, showModal: !state.showModal });

  return (
    <>
      <VStack align="center" justify="center">
        <Heading color="primary.400">Connect your wallet</Heading>
        <Text textAlign="center">
          each wallet can only be binded once to your web3auth account you can
          bind multiple wallets to a single web3auth account
        </Text>
        <Text>
          Status:{" "}
          {state.connector && state.connector.connected
            ? // ? `Connected with ${state.address}`
              `Connected`
            : "Not connected"}
        </Text>
        {state.connector && state.connector.connected ? (
          <>
            <Button onClick={killSession}>Disconnect</Button>
            <SignMessageView
              connector={state.connector}
              address_w3a={""}
              address_to_bind={""}
            />
          </>
        ) : (
          <Button onClick={connect}>Connect with WalletConnect</Button>
        )}
      </VStack>
    </>
  );
};

export default WalletConnectView;
