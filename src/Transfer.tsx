import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

function Transfer(){
    const [toAddress,setToAddress]= useState("");
    const [amount,setAmount] = useState(0);

    const {connection} = useConnection();
    const wallet = useWallet();

    async function transfer(){
       const transaction = new Transaction();
       if(wallet.publicKey){
            console.log(wallet.publicKey+" to address"+toAddress+"  amount "+amount*LAMPORTS_PER_SOL);
           transaction.add(SystemProgram.transfer({
            fromPubkey:wallet.publicKey,
            toPubkey:new PublicKey(toAddress),
            lamports : amount*LAMPORTS_PER_SOL
           }))
           try{
            await wallet.sendTransaction(transaction,connection);
            alert("transaction successfull")
           }
           catch(e){
            alert("transaction failed")
           }
        }  
        else
            alert("transaction failed")     
    }

    return(
        <div>
            <input type="text" placeholder="text" onChange={(e)=>{
                setToAddress(e.target.value)
            }} value={toAddress}></input>
            <input type="number" placeholder="amount to address" onChange={(e)=>{
                setAmount(parseFloat(e.target.value))
            }}/>
            <button onClick={transfer}>Transfer</button>
        </div>
    )
}

export default Transfer;