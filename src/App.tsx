import React from 'react';
import { BottomChat } from '@dialectlabs/react-ui';
import logo from './logo.svg';
import './App.css';
import {SolanaWalletButton} from './components/WalletButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SolanaWalletButton/>
        <BottomChat dialectId="dialect-inbox" />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
