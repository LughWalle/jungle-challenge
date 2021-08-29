import './App.css';
import Hero from './components/Hero';
import Infos from './components/Infos';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Hero />
      <News />
      <Infos />
    </div>
  );
}

export default App;