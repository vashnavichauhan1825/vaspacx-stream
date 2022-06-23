export const ReducerFun =(state,action)=>{
    switch(action.type){
        case "LOADING":
            return{
                ...state,loading:!state.loading,
            }

            default:
                throw new Error(`error:${action.type}`)
    }
}