import { useConnection, useWallet } from "@solana/wallet-adapter-react";

function Airdrop(){
    const wallet = useWallet();
    const { connection } = useConnection();
    
    async function sendToUser(){
        if(wallet.publicKey){
            const amount = parseFloat((document.getElementById("publickey") as HTMLInputElement )?.value || '0');
            await connection.requestAirdrop(wallet.publicKey,amount*1000000000);
        }
        alert('Airdrop successfull')
    }
    async function getBalance(){
        if(wallet.publicKey){
            const balance : number = await connection.getBalance(wallet.publicKey);
            const balanceElement = document.getElementById("balance");
            if (balanceElement) {
                balanceElement.innerHTML = (balance / 1000000000).toString();
            }
        }   
    }
    getBalance();   
    return(
        <div>
            <div>
                {wallet.publicKey?.toString()}
            </div>
            <div>
                <input id="publickey" type="number" placeholder="Amount" required></input>
                <button onClick={sendToUser}>Airdrop</button>
            </div>
            <div>
                <p>SOL Balance</p>
                <div id="balance"></div>
            </div>
            
        </div>
    )
}
export default Airdrop;