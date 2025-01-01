import './App.css';
import videoDB from './data/thumbnail';
import Counter from './components/Counter';
import { useReducer, useState, useContext } from 'react';
import AddVideo from './AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videoDB); // useReducer syntax
  const [theme, setTheme] = useState('darkMode');

//   const themeContext = useContext(ThemeContext);

  function videoReducer(videos, action) {
    switch (action.type) {
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

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id)); // Filters out the video by its id
  }

  return (
    <ThemeContext.Provider value={theme}>

      <div className={`App ${theme}`}> 
    <button onClick={ () => setTheme(theme === 'darkMode ? lightMode : darkMode') }>Toggle</button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <VideoList 
            videos={videos} 
            dispatch={dispatch} 
            deleteVideo={deleteVideo} 
            editVideo={editVideo}/>
        <Counter />
    </div>

    </ThemeContext.Provider>
  );
}

export default App;
