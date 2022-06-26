import './textButton.css'

const TextButton = ({children}) => {
  return (
   <button className='text-button'>
    {children}
   </button>
  )
}

export default TextButton