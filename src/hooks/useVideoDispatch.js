import { useContext } from 'react';
import VideoDispatchContext from '../context/VideodispatchContext';

function useVideoDispatch() {
    // Use the VideoDispatchContext instead of recursively calling itself
    return useContext(VideoDispatchContext); 
}

export default useVideoDispatch;
