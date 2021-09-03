import React,{useContext} from 'react'
import "./incomSummer.css"
import{GlobalContext} from "./Context/GlobalState"

const AccountSummery = () => {
    const {transcation} = useContext(GlobalContext)
    const amount = transcation.map((transcation)=> transcation.transactionAmount);
    const incom = amount.filter(item => item > 0)
    .reduce((acc,item) =>(acc += item),0).toFixed(2)

   
    const expense = amount.filter(item => item < 0)
    .reduce((acc,item) =>(acc += item),0).toFixed(2)

    return (
        <div className="inc-exp">
            <div className="income">
                <h4>Income</h4>
                <p className="money_plus">
                   {incom}
                </p>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <p className="money_minus">
                    {expense}
                </p>
            </div>
            
        </div>
    )
}

export default AccountSummery
