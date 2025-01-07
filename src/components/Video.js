import { useContext } from 'react';
import { useEffect } from 'react';
import './Video.css';
import ThemeContext from '../context/ThemeContext';
import VideodispatchContext from '../context/VideodispatchContext';

function Video({ title, id, channel = "yumna", views, time, verified, children, deleteVideo, editVideo }) {
    console.log('Video component rendered') ;
    

    const themeContext = useContext(ThemeContext)
    useEffect(()=>{

        const idx = setInterval(() => {
            console.log('Video  playing',id) // this will continue even after del the
            //vid component so its better to use a cleanup component
        }, 4000);

        // this return is executed when the component is removed from the DOM.
        return () => {
            clearInterval(idx)
        }

    },[id])// ( dependenciy array )The effect will run only when id changes.

    
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

// render = when component is created(mounting)
// re-rendering = when state change