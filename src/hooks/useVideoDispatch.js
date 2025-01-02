import { useContext } from 'react';
import  VideoDispatchContext from '../context/VideodispatchContext';

function useVideoDispatch(){

    return useContext(VideoDispatchContext); 
}
export default useVideoDispatch;