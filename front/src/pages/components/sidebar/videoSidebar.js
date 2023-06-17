import React, {useState} from 'react'
import "./videoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {

  const [Liked, setLiked] = useState(false)

  function handdleLike(){
    setLiked(!Liked)
     
}

  return (
    <div className='video-sidebar'>
      <div className="video-sidebar-options"
      onClick={handdleLike}
      >
        {Liked ? <FavoriteIcon fontSize='medium'/> :
        <FavoriteBorderIcon fontSize='medium'/> }

        <p>{ Liked ? likes+1 : likes}</p>
      </div>

      <div className="video-sidebar-options">
        <ChatIcon fontSize='medium'/>
        <p>{messages}</p>
      </div>

      <div className="video-sidebar-options">
        <ShareIcon fontSize='small'/>
        <p>{shares}</p>
      </div>

    </div>
  )
}

export default VideoSidebar
