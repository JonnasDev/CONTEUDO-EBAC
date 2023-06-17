import ComponenteVideo from './pages/video';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-video'>

        <ComponenteVideo
        likes={993}
        messages={434}
        shares={276}
        name="jotta01"
        description="saltando por dinheiro"
        music="link park"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />

        <ComponenteVideo
        likes={349}
        messages={54}
        shares={45}
        name="raiza01"
        description="gato cheirador"
        music="finge que tem uma musica aqui"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />


        
      </div>
    </div>
  );
}

export default App;
