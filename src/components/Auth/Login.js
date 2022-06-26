import AuthWrapper from 'components/UI/AuthWrapper'
import PrimaryButton from 'components/UI/button/PrimaryButton'
import SecondayButton from 'components/UI/button/SecondayButton'
import { useAuthCtx } from 'Context/AuthContext'
import { useState } from 'react'
import './login.css'

const Login = () => {
    const [formDetails , setFormDetails] =useState({
        email:"",
        password:"",
    })

    const {login} = useAuthCtx();

    const submitHandler=(e)=>{
        e.preventDefault();
        login(formDetails);
        console.log(formDetails)
    }
  return (
    <AuthWrapper>
      <form onSubmit={submitHandler}>
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
            <input id="pass" type="password"  onChange={(e)=>setFormDetails({...formDetails,password:e.target.value})} />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className='button-cont'>
          <PrimaryButton>Login <i className="fa fa-sign-in" aria-hidden="true"></i></PrimaryButton>
          <button className='sec-button' type='click' onClick={()=>setFormDetails({email:"guestvaspacx@gmail.com", password:"2000"})}>Login As Guest</button>
        </div>
      </form>
    </AuthWrapper>
  )
}

export default Login;