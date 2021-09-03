import react,{ createContext,useReducer}from "react";

// inport the Reducer 

import AppReducer from "./AppReducer"

//let create inital state 
const initalState = {
    transcation:[
      

    ]
}

// create the Global Context

export const GlobalContext = createContext(initalState);

// create provider for the global Context
export const GlobalProvider =  ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initalState)
    // Action 
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id
        });
    }

    /// Add Transaction
    function addTranscation(transcation){
        dispatch({
            type: "ADD_TRANSCATION",
             payload:transcation
        });
    }


    return(
        <GlobalContext.Provider value={
            {
                transcation: state.transcation,
                deleteTransaction,
                addTranscation
            }
        }>
            {children}
       </GlobalContext.Provider>
    )
    
}