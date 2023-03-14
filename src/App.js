import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile' 


function App() {
  return(
    <BrowserRouter>
      <div>
        <nav>
          <ul class="navbar">
          <h2 class="navHeader"></h2>
            <li class="navTitle">
            <Link to="/" class="navText">Home</Link>
            </li>
            <li class="navTitle">
            <Link to="/inventory" class="navText">Inventory</Link>
            </li>
            <li class="navTitle">
            <Link to="/profile" class="navText">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
