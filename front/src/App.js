import ComponenteVideo from './pages/video';
import './App.css';
import React, { useEffect, useState } from 'react';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite'


function App() {


           let maxHeight;
  if (window.innerHeight <= 800) {
            maxHeight = window.innerHeight;
  }


  const [Videos,
     SetVideos] = useState([]);

          async function getVideos() {

    const videosCollection = collection(db, "videos")


    const videosSnapshot = await getDocs(videosCollection)
                  const videosList = videosSnapshot.docs.map(doc => doc.data())
    SetVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  },
    [])


  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className='app-video'>

        {Videos.map((item) => {
          return (
            <ComponenteVideo
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })
        }

        {/* <ComponenteVideo
       likes={349}
       messages={54}
       shares={45}
       name="raiza01"
       description="gato cheirador"
       music="finge que tem uma musica aqui"
       url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
     /> 
        */}



      </div>
    </div>
  );
}

export default App;
