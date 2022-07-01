export const ReducerFun =(state,action)=>{
    switch(action.type){
        case "LOADING":
            return{
                ...state,loading:!state.loading,
            }

            case "VIDEOS":
             return {
        ...state,
        videos: action.payload,
      };

            default:
                throw new Error(`error:${action.type}`)
    }
}