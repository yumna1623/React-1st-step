// function Video() {
//     return <div>Video Component</div>;
// }
// export default Video;
// ------------------------------------------------
// import './Video.css';
// function Video(props) {
//     let topic  = "React JS"
//     let bg = 'Dark'
//   return (
//     <>
//       <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
//       <div className={bg}>{topic} Tutorial</div>
//       </>//fragments
//   );
// }
// export default Video;

// ------------------------------------------------
// import './Video.css';

// function Video(props) {
    
//     let bg = 'Dark'
//   return (
//     <>
//       <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
//       <div className={bg}>{props.title}</div>
//       </>//fragments
//   );
// }
// export default Video;

//------------------------------------------------
// import './Video.css';

// function Video({title,bgColor}) {
    
//     let bg = 'Dark'
//   return (
//     <>
//       <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
//       <div className={bg} style={{backgroundColor:bgColor}}>{title}</div>
//       </>//fragments
//   );
// }
// export default Video;
// --------------------------------------------------------
// import './Video.css';

// function Video({title,channel="yumna",views,time}) {
    
//   return (
//     <>
//     <div className='container'>
//     <div className='pic'>
//       <img src="https://th.bing.com/th/id/R.0a94687daa63e00e0ed5856b0d64a929?rik=5lNY3n6PQqL4ew&pid=ImgRaw&r=0" alt="Katherine Johnson" />
//       <div className='title'> {title} </div>
//       <div className='channel'> {channel} </div>
//       <div className='views'> {views} views <span>.</span>{time}</div>
//       </div>
//     </div>
//       </>
//   );
// }
// export default Video;
// ----------------------------------------------------------------------------------

// import './Video.css';

// function Video({title,channel="yumna",views,time,verified}) {
//     // WE CAN ALSO USE A TERNIARY OPERATOR
//     // let channelJSX;
//     // if (verified) {
//     //     channelJSX = <div className='channel'> {channel} ✅ </div>
//     // }
//     // else{
//     //     channelJSX = <div className='channel'> {channel} </div>
//     // }
    
//   return (
//     <>
//     <div className='container'>
//     <div className='pic'>
//       <img src="https://th.bing.com/th/id/R.0a94687daa63e00e0ed5856b0d64a929?rik=5lNY3n6PQqL4ew&pid=ImgRaw&r=0" alt="Katherine Johnson" />
//       <div className='title'> {title} </div>
//       channelJSX = <div className='channel'> {channel} {verified? '✅':null} </div>
//       <div className='views'> {views} views <span>.</span>{time}</div>
//       </div>
//     </div>
//       </>
//   );
// }
// export default Video;
// --------------------------------------------------------------------------------------------------------


import './Video.css';

function Video({title,channel="yumna",views,time,verified,children}) {    
  return (
    <>
    <div className='container'>
        {/* <button className='close' onclick = { () => deleteVideo}> X </button> */}
    <div className='pic'>
      <img src="https://th.bing.com/th/id/R.0a94687daa63e00e0ed5856b0d64a929?rik=5lNY3n6PQqL4ew&pid=ImgRaw&r=0" alt="Katherine Johnson" />
      <div className='title'> {title} </div>
      <div className='channel'> {channel} {verified? '✅':null} </div>
      <div className='views'> {views} views <span>.</span>{time}</div>
      </div>
      <div>
      {children}
        </div>
    </div>
      </>
  );
}
export default Video;
