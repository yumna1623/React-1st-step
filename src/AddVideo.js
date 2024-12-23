import { useState } from 'react';
import './AddVideo.css'

const initialState = {
    time:"1 month ago ",
        channel:"lemon Smasher ",
        title : '',
        views:''
}

function AddVideo({addVideos}) {
    const [video,setVideo] = useState(initialState)
// function deleteVideo() {
    
//     }
    
    function handleSubmit(e) {
            e.preventDefault();
            addVideos(video) 
            setVideo(initialState) 

    }
    function handleChange(e) {
            console.log(e.target.value);
            setVideo({...video,
                [e.target.name] : [e.target.value]
            })
            
    
    }
    return(
        <form>
            <input  name="title" onChange = {handleChange} type = "text" placeholder= 'title'  value ={video.title}></input>
            <input  name="views"  onChange = {handleChange}  type = "text" placeholder= 'Views' value ={video.views}></input>
            <button onClick={handleSubmit }> Submit Video </button>
        </form>
    )
}
export default AddVideo;