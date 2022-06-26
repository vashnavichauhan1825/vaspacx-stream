import axios from "axios";
import { createContext, useContext } from "react";



const AuthContext = createContext();

//  const loginHandler=async()=>{
//   const response = await axios.post("/api/auth/signup",
//   {
    
//   })
//  }
const AuthProvider =({children})=>{

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}


const useAuthCtx =()=>useContext(AuthContext);


export {useAuthCtx,AuthProvider}
