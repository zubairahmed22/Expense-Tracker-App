import React,{useState,useContext}from 'react'
import { GlobalContext } from './Context/GlobalState'
import "./addTransaction.css"
export const AddTransction = () => {
    const { addTranscation} = useContext(GlobalContext)
    const [discription,setDiscrpton]= useState("")
    const [transactionAmount,setTransactionAmount]=useState(0)
    
  
  let checkdata = discription 
  
   let  checkValidation = () =>{
     if((discription === "") && (transactionAmount === "")){
         
        return console.log("please enter form")
        

     }else{
         return console.log("thanks")
     }
    }
    
    const onSubmit = e => {
        
         e.preventDefault();  
         
         const newTransaction = {
            id: Math.floor(Math.random()* 100000000),
            discription,
            transactionAmount: +transactionAmount
         }
         
         addTranscation(newTransaction)
         setDiscrpton("")
         setTransactionAmount("")
         
    }


    
   
    return (
        <div className="addtransDiv">
            <div  ClassName="border_width">
            <h3> Add new Trancation </h3> 
          
         </div>
         <form onSubmit={onSubmit }>
             <div className="form-control">
                 <label htmlFor="description">
                     Description
                     </label>
                     <input  type="text" id="description"
                      placeholder="Detail oF Transcation"
                      value={discription}
                      onChange={(e)=>setDiscrpton(e.target.value)}
                      >
                     </input >

             </div>
             <div className="form-control">
             <label htmlFor="transactionamount" id="Amountid">
                 Transcation Amount
             </label>
             <input type="number"
             value={transactionAmount}
             id="transactionamount"
             placeholder="Enter transaction amount"
             onChange={(e)=>setTransactionAmount(e.target.value)}
             />
             </div>
             {!discription  && !transactionAmount ?  <button className="fullBtnd" disabled> Add Tranaction </button>: 
             <button className="fullBtn">Add Transaction</button> }
            
             
         </form>
        </div>
    )
}
