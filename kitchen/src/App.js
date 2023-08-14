import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Create" element={<Create/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
