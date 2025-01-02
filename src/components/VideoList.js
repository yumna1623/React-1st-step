import Video from './Video';
import PlayButton from './PlayButton';
import {useContext} from 'react';
import VideosContext from '../context/VideosContext';

function VideoList({  deleteVideo, editVideo }) {

    const videos = useContext(VideosContext);


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
        //   dispatch = {dispatch}
        >
          <PlayButton
            onPlay={() => console.log('play', video.title)}
            onPause={() => console.log('pause', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;

// import Video from './Video';
// import PlayButton from './PlayButton';

// function VideoList({ dispatch, videos, deleteVideo, editVideo }) {
//   return (
//     <>
//       {videos.map((video) => (
//         <Video
//           key={video.id}
//           title={video.title}
//           views={video.views}
//           time={video.time}
//           channel={video.channel}
//           verified={video.verified}
//           id={video.id}
//           deleteVideo={deleteVideo}
//           editVideo={editVideo}
//           dispatch = {dispatch}
//         >
//           <PlayButton
//             onPlay={() => console.log('play', video.title)}
//             onPause={() => console.log('pause', video.title)}
//           >
//             {video.title}
//           </PlayButton>
//         </Video>
//       ))}
//     </>
//   );
// }

// export default VideoList;
