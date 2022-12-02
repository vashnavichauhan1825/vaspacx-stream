import AuthWrapper from 'components/UI/AuthWrapper'
import PrimaryButton from 'components/UI/button/PrimaryButton'
import { useAuthCtx } from 'Context/AuthContext'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'
import './login.css'
import { VaspacxStreamTitle } from 'components/UI/documentTitle/VaspacxStreamTitle';

const Signup = () => {
  VaspacxStreamTitle("Sign Up")
    const [formDetails , setFormDetails] =useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })
    const [passwordVisible,setPasswordVisible]= useState(false)

    const {signup} = useAuthCtx();

    const submitHandler=(e)=>{
        e.preventDefault();
        signup(formDetails);
       
    }
  return (
    <AuthWrapper>
      <form onSubmit={submitHandler}>
      <div className='detail-box'>
        <div className='name-info'>
            <span>
            <label for="inputFn">First name</label>
            <input id="inputFn" type="text" onChange={(e)=>setFormDetails({...formDetails,firstName:e.target.value})} />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className='name-info'>
            <span>
            <label for='inputLn'>Last name</label>
            <input id='inputLn'type="text"  onChange={(e)=>setFormDetails({...formDetails,lastName:e.target.value})} />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        </div>
        <div className='name-info'>
            <span>
            <label for="inputEmail">Email</label>
            <input id="inputEmail" type="email"  onChange={(e)=>setFormDetails({...formDetails,email:e.target.value})}/>
            </span>
            <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div className='name-info'>
            <span>
            <label for="pass">Password</label>
            <input id="pass" type={passwordVisible?"text":"password"}  onChange={(e)=>setFormDetails({...formDetails,password:e.target.value})} />
            </span>
            <div onClick={()=>setPasswordVisible(!passwordVisible)}>{!passwordVisible?<i class="fa fa-eye-slash" aria-hidden="true"></i>:<i class="fa fa-eye" aria-hidden="true"></i>}</div>
        </div>
        <div className='button-cont'>
          <PrimaryButton>Sign Up <i className="fa fa-sign-in" aria-hidden="true"></i></PrimaryButton>
         
        </div>
      </form>
      <ToastContainer/>
      </AuthWrapper>
  )
}

export default Signup