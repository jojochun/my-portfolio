import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">
        <About />
        <Portfolio />
        <Footer />
        <Contact />
      </div>
    </div>
  );
}

export default App;
