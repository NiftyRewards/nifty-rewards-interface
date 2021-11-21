import { Button, Text, Heading, VStack } from "@chakra-ui/react";
import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { useState, useEffect } from "react";

interface SlopeWallet {
  connect(): Promise<{
    msg: string;
    data: {
      publicKey?: string;
    };
  }>;
  disconnect(): Promise<{ msg: string }>;
  signTransaction(message: string): Promise<{
    msg: string;
    data: {
      publicKey?: string;
      signature?: string;
    };
  }>;
  signAllTransactions(messages: string[]): Promise<{
    msg: string;
    data: {
      publicKey?: string;
      signatures?: string[];
    };
  }>;
  signMessage(message: Uint8Array): Promise<{ data: { signature: string } }>;
}

const getProvider = (): SlopeWallet | undefined => {
  const anyWindow: any = window;
  const provider = anyWindow.Slope;
  if (provider !== undefined) {
    return new Slope();
  }
  console.log("Slope Wallet not found");
  window.open("https://slope.finance/", "_blank");
  return undefined;
};

const NETWORK = clusterApiUrl("mainnet-beta");

export default function BalanceCard() {
  //   const provider = getProvider();

  const connection = new Connection(NETWORK);

  const [provider, setProvider] = useState<SlopeWallet>();
  const [publicKey, setPublicKey] = useState<PublicKey>();
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState<number>();
  const [logs, setLogs] = useState<string[]>([]);
  const addLog = (log: string) => setLogs([...logs, log]);
  useEffect(() => {
    if (provider) {
      return () => {
        provider.disconnect();
      };
    }
    const theProvider = getProvider();
    setProvider(theProvider);
  }, [provider]);

  const connect = async () => {
    try {
      const res = await provider?.connect();
      addLog(JSON.stringify(res));
      if (res?.data.publicKey) {
        const pubKey = new PublicKey(res.data.publicKey);
        setPublicKey(pubKey);
        setIsConnected(true);
        connection.getBalance(pubKey).then((bal) => {
          setBalance(bal / LAMPORTS_PER_SOL);
        });
      }
    } catch (err) {
      console.warn(err);
      addLog("Error: " + JSON.stringify(err));
    }
  };

  const disconnect = async () => {
    try {
      const res = await provider?.disconnect();
      setIsConnected(false);
      addLog(JSON.stringify(res));
    } catch (err) {
      console.warn(err);
      addLog("Error: " + JSON.stringify(err));
    }
  };

  return (
    <VStack w="100%" align="start" rounded="lg" p="4">
      {provider && isConnected ? (
        <>
          <Heading size="md">Your Address:</Heading>
          <Text>{publicKey && publicKey.toBase58()}</Text>
          <Text>{balance}</Text>

          <Button onClick={disconnect}>Disconnect from Slope</Button>
          <Text fontWeight="bold">Logs</Text>
          {logs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
        </>
      ) : (
        <>
          <Button onClick={connect}>Connect to Slope</Button>
        </>
      )}
    </VStack>
  );
}
