import './singleplaylist.css'
import imgPlay from './../../../assets/img/astro.jpg'
const SinglePlaylistPage = () => {
  return (
    <div className='playlist-box'>
        <div className='video-list'>
        <div className='img-cont'>
            <img src={imgPlay} />
            </div>
            <span>
                <p>Dikshant - Aankhon Se Batana (Official Audio)</p>
                <small>Hello, Happy Valentine's Day ! ❤ Two years ago, Dikshant and his brother  Yash Jadhav used to sit down every evening but one day</small>
            </span>
        </div>
        <div className='video-list'>
        <div className='img-cont'>
            <img src={imgPlay} />
            </div>
            <span>
                <p>Dikshant - Aankhon Se Batana (Official Audio)</p>
                <small>Hello, Happy Valentine's Day ! ❤ Two years ago, Dikshant and his brother  Yash Jadhav used to sit down every evening but one day</small>
            </span>
        </div>
        <div className='video-list'>
        <div className='img-cont'>
            <img src={imgPlay} />
            </div>
            <span>
                <p>Dikshant - Aankhon Se Batana (Official Audio)</p>
                <small>Hello, Happy Valentine's Day ! ❤ Two years ago, Dikshant and his brother  Yash Jadhav used to sit down every evening but one day</small>
            </span>
        </div>
    </div>
  )
}

export default SinglePlaylistPage