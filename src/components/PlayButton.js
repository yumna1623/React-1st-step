import { useContext, useState } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

function PlayButton({children,onPause,onPlay}) {

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
}

export default PlayButton;