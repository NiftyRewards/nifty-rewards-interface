/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./fonts";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "../components/layout";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/date-picker.css";

import { Web3AuthProvider } from "services/web3auth";
// import { useState, useEffect } from "react";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  // const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  // const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");
  const web3AuthNetwork = "mainnet";
  const chain = "mainnet";

  return (
    <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CacheProvider>
    </Web3AuthProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
