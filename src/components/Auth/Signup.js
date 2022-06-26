import AuthWrapper from 'components/UI/AuthWrapper'
import PrimaryButton from 'components/UI/button/PrimaryButton'
import SecondayButton from 'components/UI/button/SecondayButton'
import './login.css'

const Signup = () => {
  return (
    <AuthWrapper>
      <form>
      <div className='detail-box'>
        <div className='name-info'>
            <span>
            <label for="inputFn">First name</label>
            <input id="inputFn" type="text" />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className='name-info'>
            <span>
            <label for='inputLn'>Last name</label>
            <input id='inputLn'type="text" />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        </div>
        <div className='name-info'>
            <span>
            <label for="inputEmail">Email</label>
            <input id="inputEmail" type="email" />
            </span>
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className='name-info'>
            <span>
            <label for="pass">Password</label>
            <input id="pass" type="password" />
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