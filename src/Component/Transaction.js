import React,{useState,useContext} from 'react'
import { GlobalContext } from './Context/GlobalState';
const Transaction = ({transcation}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transcation.transactionAmount < 0 ? "-":"+";
    return (
        <li className={transcation.transactionAmount < 0 ? "minus":"Plus"}>
        {transcation.discription}
        <span> {sign}${Math.abs(transcation.transactionAmount)}</span>
        
        <button onClick={() => deleteTransaction(transcation.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
