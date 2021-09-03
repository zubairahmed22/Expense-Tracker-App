import React,{useContext} from 'react'
import {GlobalContext} from "../Component/Context/GlobalState"

function Balance() {
    const { transcation} = useContext(GlobalContext)
    const amount =   transcation.map(  transcation =>   transcation.transactionAmount);
    const total = amount.reduce((acc,item) =>(acc += item),0).toFixed(2);
    console.log(amount)
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>{total}</h1>

        </div>
    )
}

export default Balance
