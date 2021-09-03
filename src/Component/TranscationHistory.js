import React ,{useContext}from 'react'
import "./history.css"
 // import transaction

 import Transaction from './Transaction'


// import the Global Context
import {GlobalContext} from "../Component/Context/GlobalState"
const TranscationHistory = () => {
 
    const {transcation}  = useContext(GlobalContext)
   
    return (
        <div className="TranshisDiv">
         <h3>
              Transcation History  </h3>
              <ul className="list">
               {transcation.map(transcation => (
             <Transaction transcation={transcation} key={transcation.id}  />
               )
                  
               )}
                 
              </ul>
        </div>
    )
}

export default TranscationHistory
