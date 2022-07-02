export const ReducerFun =(state,action)=>{
    
    switch(action.type){
        case "LOADING":
            return{
                ...state,loading:!state.loading,
            }
            case 'LIKE':
                return {...state, like: action.payload}
            case "VIDEOS":
             return {
        ...state,
        videos: action.payload,
      };

      case "WATCH_LATER":
      return { ...state, watchLater: action.payload };
      
      case "HISTORY":
        return { ...state, history: action.payload };
  

            default:
                throw new Error(`error:${action.type}`)
    }
}