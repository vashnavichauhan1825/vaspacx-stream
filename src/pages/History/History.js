import Navbar from 'components/Navbar/Navbar';
import BgWrapper from 'components/UI/bgWrapper/BgWrapper';
import { VaspacxStreamTitle } from 'components/UI/documentTitle/VaspacxStreamTitle';
import { useHistoryCtx } from 'Context/HistoryContext';
import { useVideoContext } from 'Context/ReducerContext'
import VideoCard from 'pages/home/homeComponents/categories/CategoryList/VideoCard';
import PlaylistCard from 'pages/playlist/playlistComponent/PlaylistCard';
import React from 'react'
import './history.css'
const History = () => {
  const {history} = useVideoContext();
  const {removeHistoryHandler}= useHistoryCtx();
 VaspacxStreamTitle("History")
  return (
    <BgWrapper>
    <Navbar/>
    <div className='flex-row'> <h1 className='pri-white-center'>History</h1>{history.length !==0 && <p className='clr-sec'><u onClick={removeHistoryHandler} >CLEAR ALL</u></p>}</div>
   
     {history.length !==0 &&
      
      <div className='history-section'>
       { history.map((video)=>{
        return <PlaylistCard video={video}/>
       })}
      </div>}
      {history.length === 0 && <h3 className='text-center'>you don't have any History !</h3>}
    </BgWrapper>
  )
}

export default History