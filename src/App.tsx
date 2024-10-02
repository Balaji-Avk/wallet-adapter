import { ConnectionProvider, useConnection, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import Transfer from './Transfer';
import Accounts from './accounts';

function App() {
    return (
        <div className='bg-biege text-slate-900 h-screen p-2 flex flex-row justify-center'>
            <div className='flex flex-col justify-center '>
                <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                    <WalletProvider wallets={[]} autoConnect>
                        <WalletModalProvider>
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                        <Airdrop />
                        <Accounts />
                        <Transfer />
                        </WalletModalProvider>
                    </WalletProvider>
                </ConnectionProvider>
            </div>
        </div>
    );
};

export default App;