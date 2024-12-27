import './App.css';
import videoDB from './data/thumbnail';
import Counter from './components/Counter';
import { useState } from 'react';
import AddVideo from './AddVideo';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);


    function addVideos(video){

            setVideos([...videos,{...video, id : videos.length+1}

             ]);
    }
  

  function deleteVideo(id) {
    console.log("Deleting video with id:", id);  // Debugging line
    setVideos(videos.filter((video) => video.id !== id)); // Filters out the video by its id
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id)); // Filters out the video by its id

}
function updateVideo(video) {
    const index = videos.findIndex(v => v.id === video.id)
    const newVideo = [...videos]
    newVideo.splice(index,1,video)
    setVideos(newVideo)
}

  return (
    <div className="App">
      <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo = {editableVideo} />
      <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo} />
      <Counter />
    </div>
  );
}

export default App;
