import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Data from './Data'
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
