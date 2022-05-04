import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Service from './pages/services';

function App() {
  return (
    
    <div> 
      <NavbarComp/>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
      </Routes>
    </div>
    
    
  );
}

export default App;
