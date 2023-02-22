import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DialectProviders from "./providers/DialectProviders";
import {SolanaWalletContext} from './components/WalletButton';
import { WalletAdapterProvider } from "./providers/WalletProvider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WalletAdapterProvider>
      <DialectProviders>
        <App />
      </DialectProviders>
    </WalletAdapterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
