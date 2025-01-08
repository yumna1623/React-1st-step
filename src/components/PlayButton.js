import { useContext, useState,memo } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

//if i write memo keyword before fun then it means that this function will be called only once
//and it will not be called again and again that means inshort that it will not be re-rendered
const PlayButton= memo (function PlayButton({children,onPause,onPlay}) {
    console.log("PlayButton rendered");
    
//now well export the memoized function PlayButton 
    const themeContext = useContext(ThemeContext);

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
            className =  {themeContext}
            onClick={handleClick}> {children} : {playing? '⏯' : '⏸'} </button>
    );
})

export default PlayButton;