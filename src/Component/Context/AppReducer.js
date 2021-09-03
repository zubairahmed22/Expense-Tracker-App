export default (state,action) =>{
    switch(action.type){
        case "DELETE_TRANSACTION":
            return{
                 ...state,
                 transcation:state.transcation.filter(trans => trans.id !== action.payload)

            };
            case "ADD_TRANSCATION":
                return{
                   ...state,
                   transcation:[action.payload,...state.transcation] 
                };
        default: 
        return state
    }
}