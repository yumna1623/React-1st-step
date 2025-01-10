import Video from './Video';
import PlayButton from './PlayButton';
import { useCallback, useEffect, useMemo } from 'react';
import useVideos from '../hooks/useVideos';
import useVideoDispatch from '../hooks/useVideoDispatch';
import axios from 'axios';

function VideoList({ deleteVideo, editVideo }) {
  const url = "https://my.api.mockaroo.com/api.json?key=dbe8dbe0";
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  // Declare `getVideos` outside `useEffect` for reuse
  async function getVideos() {
    try {
      const response = await axios.get(url); // asynchronous request
      console.log("Getting videos", response.data);
      dispatch({ type: "LOAD", payload: response.data });
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }
  useEffect(() => {
    getVideos(); // Fetch videos on initial render
  }, []);

  const play = useCallback(() => console.log("play"), []); //useCallback is used to prevent the re-rendering of the function)
  const pause = useCallback(() => console.log("pause"), []);
  const memoBtn = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [play, pause]
  ); //useMemo is used to prevent the re-rendering of the button
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        >
          {/* <PlayButton
            onPlay={play} // here playbtn is still not memoized so it will re-render
            onPause={pause}`
          >
            {video.title}
          </PlayButton> */} 
           {/* we doing memoize playbtn  */}
          {memoBtn}
        </Video>
      ))}
      <button onClick={getVideos}>Get videos</button>
    </>
  );
}

export default VideoList;
