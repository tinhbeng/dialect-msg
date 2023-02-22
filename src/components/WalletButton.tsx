import React, { FC, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
// import { PhantomIcon } from './Icon';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

export const SolanaWalletButton = () => {
  return (
    <>
      <WalletModalProvider>
        <WalletMultiButton
          className="dialect-wallet-button"
          // startIcon={<PhantomIcon />}
        />
      </WalletModalProvider>
    </>
  );
};
const NEXT_PUBLIC_SOLANA_RPC_URL = 'https://solana-api.solana.fm/rpc';
export function SolanaWalletContext({children}: any) {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;
  console.log('network', network)
  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(
    () => NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(network),
    [network]
  );

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolletWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
