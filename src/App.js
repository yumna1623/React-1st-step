import './App.css';
import videoDB from './data/thumbnail';
import Counter from './components/Counter';
import { useReducer, useState } from 'react';
import AddVideo from './AddVideo';
import VideoList from './components/VideoList';

function App() {


    const [editableVideo, setEditableVideo] = useState(null);
    const [videos,dispatch] = useReducer(videoReducer,videoDB)               //useReducer syntax
//   const [videos, setVideos] = useState(videoDB);           //useState syntax


    function videoReducer(videos,action) {
        switch(action.type){    
            case 'ADD':
                return [...videos,{...action.payload, id : videos.length+1}]
            case 'DELETE':
                return videos.filter((video) => video.id !== action.payload)
            case 'EDIT':
                return videos.find((video) => video.id === action.payload)
            case 'UPDATE':
                const index = videos.findIndex(v => v.id === action.payload.id)
                const newVideo = [...videos]
                newVideo.splice(index,1,action.payload)
                setEditableVideo(null)
                return newVideo
            default:
                return videos   
        }
    }

    // function addVideos(video){
        // dispatch({type:'ADD',payload:video})
    //       //action : {type:'ADD',payload:video}
    //         // setVideos([...videos,{...video, id : videos.length+1}
    //         //  ]);
    // }

  function deleteVideo(id) {
    console.log("Deleting video with id:", id);  // Debugging line
    dispatch({type:'DELETE',payload:id})
    // setVideos(videos.filter((video) => video.id !== id)); // Filters out the video by its id
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id)); // Filters out the video by its id

}
// function updateVideo(video) {
//     // const index = videos.findIndex(v => v.id === video.id)
//     // const newVideo = [...videos]
//     // newVideo.splice(index,1,video)
//     // setVideos(newVideo)
    // dispatch({type:'UPDATE',payload:video})
// }
  return (
    <div className="App">
      <AddVideo dispatch = {dispatch}  editableVideo = {editableVideo} />
      <VideoList dispatch={dispatch} deleteVideo={deleteVideo} editVideo={editVideo} />
      <Counter />
    </div>
  );
}

export default App;
