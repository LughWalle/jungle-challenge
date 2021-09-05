import './sass/App.scss';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Infos from './components/Infos';
import News from './components/News';
import Provider from './context/JungleProvider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Hero />
        <News />
        <Infos />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;