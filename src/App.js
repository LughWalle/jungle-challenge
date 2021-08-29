import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Infos from './components/Infos';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Hero />
      <News />
      <Infos />
      <Footer />
    </div>
  );
}

export default App;