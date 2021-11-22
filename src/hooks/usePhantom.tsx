import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { useEffect, useState } from "react";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}
export interface UsePhantom {
  provider: PhantomProvider;
  balance: number | undefined;
  logs: string[];
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: PublicKey | null;
}

const getProvider = (): PhantomProvider | undefined => {
  if ("solana" in window) {
    const anyWindow: any = window;
    const provider = anyWindow.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
  // window.open("https://phantom.app/", "_blank");
};

const NETWORK = clusterApiUrl("mainnet-beta");

function BalanceCard() {
  const connection = new Connection(NETWORK);

  const [provider, setProvider] = useState<PhantomProvider>();
  const [balance, setBalance] = useState<number>();
  const [logs, setLogs] = useState<string[]>([]);
  const addLog = (log: string) => setLogs([...logs, log]);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (provider) {
      return () => {
        provider.disconnect();
      };
    }
    const theProvider = getProvider();
    setProvider(theProvider);
  }, [provider]);
  if (!provider) {
    return <h2>Could not find a provider</h2>;
  }

  const connect = async () => {
    try {
      const res = await provider.connect();
      addLog(JSON.stringify(res));
      // const publicKey = new PublicKey(res.publicKey);
      connection.getBalance(res.publicKey).then((bal) => {
        setBalance(bal / LAMPORTS_PER_SOL);
      });
    } catch (err) {
      console.warn(err);
      addLog("Error: " + JSON.stringify(err));
    }
  };

  const disconnect = async () => {
    try {
      const res = await provider.disconnect();
      addLog(JSON.stringify(res));
    } catch (err) {
      console.warn(err);
      addLog("Error: " + JSON.stringify(err));
    }
  };

  return {
    provider,
    balance,
    logs,
    connect,
    disconnect,
    isConnected: provider && provider.publicKey,
  };
}

export default BalanceCard;
