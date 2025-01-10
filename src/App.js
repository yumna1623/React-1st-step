import './App.css';
import videoDB from './data/thumbnail';
import Counter from './components/Counter';
import { useReducer, useState, useRef, useCallback } from 'react';
import AddVideo from './AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideodispatchContext from './context/VideodispatchContext';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [theme, setTheme] = useState('darkMode');
  const [videos, dispatch] = useReducer(videoReducer, []); // useReducer syntax
const inputref =useRef(null);
  const { width, height } = useWindowSize();


  function videoReducer(videos, action) {
    switch (action.type) {

    case 'LOAD':
        return action.payload;
    case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
    case 'DELETE':
        return videos.filter((video) => video.id !== action.payload);
      case 'EDIT':
      return videos.find((video) => video.id === action.payload);
case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
    default:
        return videos;
    }
}

  function deleteVideo(id) {
    console.log('Deleting video with id:', id); // Debugging line
    dispatch({ type: 'DELETE', payload: id });
}

const editVideo = useCallback(function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id)); // Filters out the video by its id
},[videos])

return (
    <ThemeContext.Provider value={theme}>
    <VideosContext.Provider value={videos}>
    <VideodispatchContext.Provider value={dispatch}>

    <div className={`App ${theme}`}> 
    <button onClick={() => setTheme(theme === 'darkMode' ? 'lightMode' : 'darkMode')}>Toggle</button>
    <button onClick={()=> {inputref.current.focus()}}>FOCUS</button>

    <Counter />

    <AddVideo 
    ref = {inputref}
    editableVideo={editableVideo} />

        {/* <VideoList 
            
            deleteVideo={deleteVideo} 
            editVideo={editVideo}/>
        <p>Window width: {width}px</p>
      <p>Window height: {height}px</p> */}
    </div>

    </VideodispatchContext.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider>
);
}

export default App;
