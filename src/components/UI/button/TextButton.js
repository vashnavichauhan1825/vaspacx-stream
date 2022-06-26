import { useAuthCtx } from 'Context/AuthContext'
import './textButton.css'

const TextButton = ({children}) => {
    const {logout} = useAuthCtx();
  return (
   <button className='text-button' type='click' onClick={logout}>
    {children}
   </button>
  )
}

export default TextButton