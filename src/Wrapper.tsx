import { useWallet } from "@solana/wallet-adapter-react";
import Airdrop from "./Airdrop";
import Transfer from "./Transfer";
import Accounts from "./accounts";
export default function Wrapper(){
    const wallet = useWallet();
    if(wallet.connected){
        return(
            <div className="flex justify-between">
                <div className=" overflow-auto h-screen">
                    <Accounts />
                </div>
                <div className="px-2">
                    <Airdrop />
                    <Transfer />
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )
}