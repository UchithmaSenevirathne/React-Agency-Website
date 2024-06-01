import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Product from './components/Product'

function App() {
  return (
      <>
          <Navbar/>
          <Home/>
          <Services/>
          <About/>
          <Product/>
      </>
  );
}

export default App;
