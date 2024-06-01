import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Product from './components/Product'
import Blog from './components/Blog'

function App() {
  return (
      <>
          <Navbar/>
          <Home/>
          <Services/>
          <About/>
          <Product/>
          <Blog/>
      </>
  );
}

export default App;
