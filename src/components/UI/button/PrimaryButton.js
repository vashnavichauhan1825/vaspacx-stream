import './primarybutton.css'

const PrimaryButton = ({children,onClick}) => {
  console.log(onClick)
  return (
   <button onClick={onClick} className='pri-button'>{children}</button>
  )
}

export default PrimaryButton