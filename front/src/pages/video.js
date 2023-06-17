import React, { useRef, useState } from 'react'
import './video.css'
import VideoFooter from './components/footer/footer'
import VideoSidebar from './components/sidebar/videoSidebar'

function ComponenteVideo({likes, messages, shares, name, description, music, url}) {

  const videoRef = useRef(null)
  const [play, setplay] = useState(false)

  function handleStart() {

    if (play) {
      videoRef.current.pause()
      setplay(false)
    }
    else {
      videoRef.current.play()
      setplay(true)
    }

  }

  return (
    <div className='container-video'>

      <video className='video-player'
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
       >
      </video>

      <VideoSidebar
      likes={likes}
      messages={messages}
      shares={shares}
      />
      
      <VideoFooter
      name={name}
      description={description}
      music={music}
      
      />
     
    </div>
  )
}

export default ComponenteVideo
