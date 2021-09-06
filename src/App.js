import { useContext, useEffect } from "react";
import "./sass/App.scss";
import "./sass/Loading.scss";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Infos from "./components/Infos";
import News from "./components/News";
import JungleContext from "./context/JungleContext";

function App() {
  const { loading, setLoading } = useContext(JungleContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return (
      <div className="loading-parent">
        <div className="loading">
        </div>
      </div>
    );
  } else {
    return (
        <div className="App">
          <Hero />
          <News />
          <Infos />
          <Footer />
        </div>
    );
  }
}

export default App;
