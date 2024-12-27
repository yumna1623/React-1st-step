import { useEffect, useState } from 'react';
import './AddVideo.css';

const initialState = {
  time: '1 month ago ',
  channel: 'lemon Smasher ',
  title: '',
  views: ''
};

function AddVideo({ addVideos,updateVideo,editableVideo }) {
  const [video, setVideo] = useState(initialState);
  

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        updateVideo(video)

    }
    else{

        addVideos(video);
    }
    setVideo(initialState); // Reset the state after submitting
  }

  function handleChange(e) {
    setVideo({
      ...video,
      [e.target.name]: e.target.value // Correct way to update the state
    });
  }
  useEffect(()=>{
    if(editableVideo){

        setVideo(editableVideo)

    }
  },[editableVideo])

  return (
    <form>
      <input
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="title"
        value={video.title}
      />
      <input
        name="views"
        onChange={handleChange}
        type="text"
        placeholder="Views"
        value={video.views}
      />
      <button onClick={handleSubmit}> {editableVideo?'Edit ':'Add'} Video</button>
    </form>
  );
}

export default AddVideo;
