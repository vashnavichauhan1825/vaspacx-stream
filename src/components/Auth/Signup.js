import AuthWrapper from 'components/UI/AuthWrapper'
import PrimaryButton from 'components/UI/button/PrimaryButton'
import SecondayButton from 'components/UI/button/SecondayButton'
import { useAuthCtx } from 'Context/AuthContext'
import { useState } from 'react'
import './login.css'

const Signup = () => {
    const [formDetails , setFormDetails] =useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })

    const {login} = useAuthCtx();

    const submitHandler=(e)=>{
        e.preventDefault();
        login(formDetails);
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
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className='name-info'>
            <span>
            <label for="pass">Password</label>
            <input id="pass" type="password"  onChange={(e)=>setFormDetails({...formDetails,password:e.target.value})} />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className='button-cont'>
          <PrimaryButton>Sign Up <i className="fa fa-sign-in" aria-hidden="true"></i></PrimaryButton>
          <SecondayButton>Login As Guest</SecondayButton>
        </div>
      </form>
      </AuthWrapper>
  )
}

export default Signup