export const ReducerFun =(state,action)=>{
    const encodedToken = localStorage.getItem("token")
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
      case "HISTORY":
        return { ...state, history: action.payload };
  

            default:
                throw new Error(`error:${action.type}`)
    }
}