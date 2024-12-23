import { useState } from 'react';
import './PlayButton.css';

function PlayButton({children,onPause,onPlay}) {
    const [playing,setPlaying] = useState(false);
    function handleClick(e){
        if(playing){
            onPause()
        }
        else{

            onPlay();
        }
         setPlaying(!playing);
    }
    return (
        <button
            type="button"
            className="btn btn-warning custom-hover"
            onClick={handleClick}> {children} : {playing? '⏯' : '⏸'} </button>
    );
}

export default PlayButton;
