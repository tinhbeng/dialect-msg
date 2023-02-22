import React, {useState, useEffect, useMemo} from "react"
import "@dialectlabs/react-ui/index.css";

import {
  DialectUiManagementProvider,
  DialectThemeProvider,
  DialectNoBlockchainSdk,
  ConfigProps,
} from "@dialectlabs/react-ui";
import {
  DialectSolanaSdk,
  DialectSolanaWalletAdapter,
  SolanaConfigProps,
} from "@dialectlabs/react-sdk-blockchain-solana";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { solanaWalletToDialectWallet } from "../utils";
import { DialectDappsIdentityResolver } from "@dialectlabs/identity-dialect-dapps";
import { SNSIdentityResolver } from "@dialectlabs/identity-sns";
import { CardinalTwitterIdentityResolver } from "@dialectlabs/identity-cardinal";

function SdkProvider({children}: any){
  const solanaWallet = useWallet();
  const { connection } = useConnection();
  const [dialectSolanaWalletAdapter, setDialectSolanaWalletAdapter] =  useState<DialectSolanaWalletAdapter | null>(null);
  console.log("solanaWallet", solanaWallet)
  // Basic Dialect-related configuration
  const dialectConfig: ConfigProps = useMemo(
    () => ({
      // identity: {
      //   resolvers: [
      //     new DialectDappsIdentityResolver(), // @dialectlabs/identity-dialect-dapps
      //     new SNSIdentityResolver(connection), // @dialectlabs/identity-sns
      //     new CardinalTwitterIdentityResolver(connection), // @dialectlabs/identity-cardinal
      //   ],
      // },
      // general environment to target
      environment: "development",
      dialectCloud: {
        // how to store/cache authorization token to make API calls
        tokenStore: "local-storage",
      },
    }),
    []
  );

  // Solana-specific configuration
  const solanaConfig: SolanaConfigProps = useMemo(
    () => ({
      wallet: dialectSolanaWalletAdapter,
    }),
    [dialectSolanaWalletAdapter]
  );

  useEffect(() => {
    // `solanaWalletToDialectWallet` is a function that needs to be implemented by you.
    // See "Converting your wallet for Dialect" section below.
    setDialectSolanaWalletAdapter(solanaWalletToDialectWallet(solanaWallet));
  }, [solanaWallet]);

  // If our wallet has been initialized, then switch to Solana SDK provider
  if (dialectSolanaWalletAdapter) {
    return (
      <DialectSolanaSdk config={dialectConfig} solanaConfig={solanaConfig}>
        {children}
      </DialectSolanaSdk>
    );
  }

  return <DialectNoBlockchainSdk>{children}</DialectNoBlockchainSdk>;
};

function DialectProviders({ children }: any) {
  return (
    <SdkProvider>
      {/* 'dark' | 'light' */}
      <DialectThemeProvider theme="dark">
        <DialectUiManagementProvider>{children}</DialectUiManagementProvider>
      </DialectThemeProvider>
    </SdkProvider>
  );
};

export default DialectProviders