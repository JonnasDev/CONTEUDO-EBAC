import React, { useRef, useState } from 'react'
import './video.css'
import VideoFooter from './components/footer/footer'

function ComponenteVideo() {

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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z" >
      </video>

      <VideoFooter/>

    </div>
  )
}

export default ComponenteVideo
