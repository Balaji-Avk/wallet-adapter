import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Wrapper from './Wrapper';

const WalletButtons = () =>{
    const wallet = useWallet();
    return(
        <div className='flex justify-center'>
            <div className=''>
                <WalletMultiButton />
            </div>
            {wallet.connected && <WalletDisconnectButton />}
        </div>
    )
}


function App() {
    
    return (
        <div className='bg-biege text-slate-900 p-2 flex flex-row justify-center'>
            <div className='flex flex-col justify-center '>
                <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                    <WalletProvider wallets={[]} autoConnect>
                        <WalletModalProvider>
                        <div className='flex flex-col'>
                            <WalletButtons />
                            <Wrapper />
                        </div>
                        </WalletModalProvider>
                    </WalletProvider>
                </ConnectionProvider>
            </div>
        </div>
    );
};

export default App;