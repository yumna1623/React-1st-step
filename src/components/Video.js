import { useContext } from 'react';
import './Video.css';
import ThemeContext from '../context/ThemeContext';

function Video({ title, id, channel = "yumna", views, time, verified, children, deleteVideo, editVideo }) {
    const themeContext = useContext(ThemeContext)
  return (

    <>
    <div className= { `container ${themeContext} `}>
      <button className='close' type="button" onClick={() => deleteVideo(id)}> X </button>
      <button className='close' type="button" onClick={() => editVideo(id)}> Edit </button>
      <div className='pic'>
        <img 
          src={`https://picsum.photos/id/237/200/300`} 
          alt="Video Thumbnail" 
        />
        <div className='title'> {title} </div>
        <div className='channel'> {channel} {verified ? '✅' : null} </div>
        <div className='views'> {views} views <span>.</span>{time}</div>
      </div>
      <div>
        {children}
      </div>
    </div>
    </>
  );
}

export default Video;
