import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'

function App() {
  return (
      <>
          <Navbar/>
          <Home/>
          <Services/>
          <About/>
      </>
  );
}

export default App;
