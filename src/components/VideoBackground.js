import React, {useRef} from 'react';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from './useWindowDimensions'

const VideoBackground = ({backgroundSrc, setBgHasLoaded}) => {
  //get location
  const location = useLocation();
  const {pathname} = location;

  const {width} = useWindowDimensions();
  
  const vidRef = useRef(null);


  
  //functions
  const pauseVideo = () => {
    vidRef.current.classList.add('blur-video');
    vidRef.current.pause();
  }
  const playVideo = () => {
    vidRef.current.classList.remove('blur-video');
    setTimeout(() => {vidRef.current.play().then().catch(err => console.log(err))}, 150);
  }
  
  const toggleBlur = () => pathname === "/" ? "bg-img" : "bg-img blur";

  const handleMediaLoaded = () => {
    setBgHasLoaded(true);
  };
  
  // check pathname
  if (vidRef.current !== null) {
    pathname === "/" ? playVideo() : pauseVideo();
  }
  
  //image loader
  const backgroundImage = new Image();
  backgroundImage.src = backgroundSrc;
  backgroundImage.onload = handleMediaLoaded;
  
  let source = (<video ref={vidRef} playsInline autoPlay muted loop id="bg">
      <source src="/back.mp4" type="video/webm"/>
      <source src="/back.mp4" type="video/mp4"/>
    </video>)

  if (width < 1025) {
    source = (<></>)
  }

  return (
    <div>
      <div className={toggleBlur()} style={{backgroundImage: `url(${backgroundSrc})`}}>
      </div>
      {source}
    </div>
  )
}

export default VideoBackground;