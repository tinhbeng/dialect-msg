import React from 'react';
import { Chat } from '@dialectlabs/react-ui';
import './App.css';
import {SolanaWalletButton} from './components/WalletButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SolanaWalletButton/>
        <Chat dialectId="dialect-inbox" type="inbox" />
      </header>
    </div>
  );
}

export default App;
