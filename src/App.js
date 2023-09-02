import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Skills from "./components/Skills";
// import './App.css';

function App() {
  return (
    <div className={"main-class"}>
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
