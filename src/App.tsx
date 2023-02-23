import React from 'react';
import { Chat } from '@dialectlabs/react-ui';
import './App.css';
import {SolanaWalletButton} from './components/WalletButton'
import { NotificationsButton, BottomChat } from '@dialectlabs/react-ui';
function App() {
  const DAPP_EXAMPLE_ADDRESS = '9GR7sMF1tihthze2nzSPfiapZx96v3XFWZoC9dsy9zR1';
  return (
    <div className="App">
      <header className="App-header">
        <SolanaWalletButton/>
        {/* <NotificationsButton
          dialectId="dialect-notifications"
          dappAddress={DAPP_EXAMPLE_ADDRESS}
          notifications={[
            { name: 'Welcome message', detail: 'On signup' },
          ]}
          pollingInterval={15000}
          channels={['web3', 'email', 'sms', 'telegram']}
        /> */}
        <BottomChat dialectId="dialect-bottom-chat" />
        {/* <Chat dialectId="dialect-inbox" type="popup" /> */}
      </header>
    </div>
  );
}

export default App;
