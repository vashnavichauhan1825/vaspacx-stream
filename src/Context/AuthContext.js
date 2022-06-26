import axios from "axios";
import { createContext, useContext } from "react";



const AuthContext = createContext({
    login:()=>{},
});


const AuthProvider =({children})=>{

    const loginHandler=async(formDetails)=>{
        const {firstName,lastName,password,email} = formDetails
       try {
        const response = await axios.post("/api/auth/signup",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        console.log(response)
        if(response.status === 201){
            console.log(response)
        }
       } catch (error) {
        console.log(error)
       }
        }
       
        const ctxValue={
           login:loginHandler,
        }
    return(
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuthCtx =()=>useContext(AuthContext);


export {useAuthCtx,AuthProvider}
