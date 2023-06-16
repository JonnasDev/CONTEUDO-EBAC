import React from 'react'
import "./footer.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='video-footer'>
      <div className='video-footer-text'>
        <h3 className='nome-perfil'>@JottinhaDoCreu</h3>
        <p>Eu estou de roupa ttk #SouManso #AiKalica</p>

        <div className='video-footer-musica'>

          <MusicNoteIcon className='video-footer-icon' />
          
          <div className='video-footer-musica-text'>
            <p>Pitbull Enraivado -Oh polêmico</p>
          </div>

        </div>
      </div>

      <img className="vinil"
        alt=''
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z' />

    </div>
  )
}

export default VideoFooter
