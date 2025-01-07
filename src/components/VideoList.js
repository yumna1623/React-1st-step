import Video from './Video';
import PlayButton from './PlayButton';
import { useEffect } from 'react';
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
      console.log('Getting videos', response.data);
      dispatch({ type: 'LOAD', payload: response.data });
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
  useEffect(() => {
    getVideos(); // Fetch videos on initial render
  }, []);

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
          <PlayButton
            onPlay={() => console.log('play', video.title)}
            onPause={() => console.log('pause', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={getVideos}>Get videos</button>
    </>
  );
}

export default VideoList;
