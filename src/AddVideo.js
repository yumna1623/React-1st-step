import { useEffect, useRef, useState } from 'react';
import './AddVideo.css';
import useVideoDispatch from './hooks/useVideoDispatch';

const initialState = {
  time: '1 month ago ',
  channel: 'lemon Smasher ',
  title: '',
  views: ''
};

function AddVideo({ editableVideo }) {
  const [video, setVideo] = useState(initialState);
//   const dispatch = useContext(VideodispatchContext);
    const dispatch = useVideoDispatch()
    const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        // updateVideo(video)
        dispatch({type:'UPDATE',payload:video})
    }
    else{
        // addVideos(video);
        dispatch({type:'ADD',payload:video})

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
    // inputRef.current.value = "demo"
    inputRef.current.focus()
  },[editableVideo])

  return (
    <form>
      <input
      ref={inputRef}
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

