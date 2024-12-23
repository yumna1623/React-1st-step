// ---------------------------------1st react file--------------------------------
// App is parent basically so if you want to add new functions like demo you have to add it in parent (App function)
//so that it can work easily
// (1)
//  you can add a component like  this expression let name = 'react app' and then
// ------------------------------------------

// ------------------------------------------
// ------------------------------------------
// function App() {
//     console.log("App");
// let name = 'react app'
//   return (
//     <div className="App">
//       <div className= "App-header">
//             {name}
//             <Demo></Demo>
//       </div>
//     </div>
//   );
// }

// (2)
// function App() {
//     console.log("App");
// let name = 'react app'
// let className = 'App-header'
//   return (
//     <div className="App">
//       <div className= {className}>
//             {name}
//             <Demo></Demo>
//       </div>
//     </div>
//   );
// }

//now i have made this demo function so i have to add this in Appp function
// function Demo() {
//     console.log("Demo");

//   return (
//     <div className="App">
//       <div className= "App-header">
//             Demo
//       </div>
//     </div>
//   );
// }
// -----------------------------------------------------------------------------

// import "./App.css";

// function App() {
//     console.log("App");
// let name = 'react app'
// let className = 'App-header'
//   return (
//     <div className="App">
//       <div className= {className}>
//             {name}
//             <Demo></Demo>
//       </div>
//     </div>
//   );
// }
// function Demo() {
//     console.log("Demo");

//   return (
//     <div className="App">
//       <div className= "App-header">
//             Demo
//       </div>
//     </div>
//   );
// }

// export default App;

// -----------------------------------CONDITIONAL RENDERING-------------------------------------------------
// import Video from "./components/Video";
// import "./App.css";
// function App() {
//     let obj = {
//             title:"React JS Tutorial",
//             views:"1M",
//             time:"1 month ago ",
//             channel:"Gate Smasher ",
//             verified: true                }
//   return (
//     <div className="App">
//       <div>
//         <Video
//           title="Node JS Tutorial"
//           views="100k"
//           time="1 year ago "
//           channel="coder dost"
//           verified={true}
//         ></Video>

//         <Video
//           title="React JS Tutorial"
//           views="900k"
//           time="10 year ago "
//           channel="Gate Smasher "
//           verified={false}
//         ></Video>

//         <Video{...obj}> </Video>
//       </div>
//     </div>
//   );
// }
// export default App;
// -------------------------------------CONDITIONAL,RENDERING,MAPS-----------------------------------------------
// import Video from "./components/Video";
// import "./App.css";
// import videos from './data/thumbnail'
// function App() {
//     // let videos = [{
//     //         title:"React JS Tutorial",
//     //         views:"1M",
//     //         time:"1 month ago ",
//     //         channel:"Gate Smasher ",
//     //         verified: true
//     //      },
//     //      {

//     //         title:"React JS Tutorial",
//     //         views:"100M",
//     //         time:"1 month ago ",
//     //         channel:"window Smasher ",
//     //         verified: true
//     //      },
//     //      {
//     //         title:"React JS Tutorial",
//     //         views:"100k",
//     //         time:"1 month ago ",
//     //         channel:"lemon Smasher ",
//     //         verified: false
//     //      }
//     //     ];

//   return (
//     <div className="App">
//         {
//             videos.map(video=><Video
//                 key={video.id}
//                 title={video.title}
//                 views={video.views}
//                 time={video.time}
//                 channel={video.channel}
//                 verified={video.verified}
//               ></Video>)
//         }
//       <div>
//         <Video
//           title="Node JS Tutorial"
//           views="100k"
//           time="1 year ago "
//           channel="coder dost"
//           verified={true}
//         ></Video>

//         <Video
//           title="React JS Tutorial"
//           views="900k"
//           time="10 year ago "
//           channel="Gate Smasher "
//           verified={false}
//         ></Video>
//       </div>
//     </div>
//   );
// }
// export default App;

// -------------------------------------4-----EVENTS/EVENTS HANDLERS----------------------------------------------
import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/thumbnail";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./AddVideo";

function App() {
    const [videos,setVideos] = useState(videoDB)

    function addVideos(video){

            setVideos([...videos,{...video, id : videos.length+1}

             ]);
    }
  return (
    <div className="App">
        <AddVideo addVideos = {addVideos}></AddVideo>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("play",video.title)}
            onPause={() => console.log("pause",video.title)} >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    <Counter></Counter>
    </div>
  );
}
export default App;
