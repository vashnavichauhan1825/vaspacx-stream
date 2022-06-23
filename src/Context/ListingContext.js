import { createContext, useContext, useReducer } from "react";
import { ReducerFun } from "../Reducer/ReducerFun";

const ListingContext = createContext();

const ListingProvider =({children})=>{
    const [{loading},dispatch] = useReducer(ReducerFun , {loading:false});
    return(
        <ListingContext.Provider value={{loading,dispatch}}>
            {children}
        </ListingContext.Provider>
    )
};

const useListingContext =()=> useContext(ListingContext);

export{useListingContext,ListingProvider};