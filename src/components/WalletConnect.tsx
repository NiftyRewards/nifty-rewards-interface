import WalletConnectClient, { CLIENT_EVENTS } from "@walletconnect/client";
import EthereumProvider from "@walletconnect/ethereum-provider";
import { PairingTypes, SessionTypes } from "@walletconnect/types";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useState, useEffect } from "react";

const WalletConnect = () => {
  const init = async () => {
    // 1. Create a WalletConnect Client
    const client = await WalletConnectClient.init({
      projectId:
        "b03ca2ba0fbc985131f732d6fee93651",
      relayUrl: "wss://relay.walletconnect.com",
      metadata: {
        name: "Nifty Rewards",
        description: "Nifty Rewards",
        url: "#",
        icons: ["https://walletconnect.com/walletconnect-logo.png"],
      },
    });

    // 2. Subscribe to client events

    client.on(
      CLIENT_EVENTS.pairing.proposal,
      async (proposal: PairingTypes.Proposal) => {
        // Display the QRCode modal on a new pairing request.
        const { uri } = proposal.signal.params;
        console.log("EVENT", "QR Code Modal opened");
        QRCodeModal.open(uri, () => {
          console.log("EVENT", "QR Code Modal closed");
        });
      }
    );

    client.on(
      CLIENT_EVENTS.session.deleted,
      (deletedSession: SessionTypes.Settled) => {}
    );

    // 3. Create EthereumProvider (with default RPC configuration) by passing in the `client` instance.
    const provider = new EthereumProvider({
      chainId: 1,
      client,
      rpc: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      },
    });

    // 4. Enable session (triggers `CLIENT_EVENTS.pairing.proposal` event).
    await provider.enable();
  };
};

export default WalletConnect;
