import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './AddVideo.css';
import useVideoDispatch from './hooks/useVideoDispatch';

const initialState = {
  time: '1 month ago ',
  channel: 'lemon Smasher ',
  title: '',
  views: ''
};

const AddVideo = forwardRef(function AddVideo({ editableVideo},ref) {
    const [video, setVideo] = useState(initialState);
      const dispatch = useVideoDispatch()
      // const inputRef = useRef(null);
    //   useImperativeHandle(ref,()=>({},[]));
    const iRef = useRef(null);
      useImperativeHandle(ref,()=>{
        return{
            focus(){
                iRef.current.focus()
            }
        }
      },[]);
  
    function handleSubmit(e) {
      e.preventDefault();
      if(editableVideo){
          dispatch({type:'UPDATE',payload:video})
      }
      else{
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
    //   inputRef.current.focus()
    },[editableVideo])
  
    return (
      <form>
        <input
        // ref={ref}
        ref={iRef}
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
  })

export default AddVideo;

