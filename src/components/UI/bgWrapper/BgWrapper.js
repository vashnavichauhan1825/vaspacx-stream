import './bgwrapper.css'

const BgWrapper = ({children}) => {
  return (
    <div className='bg-img'>
        {children}
    </div>
  )
}

export default BgWrapper