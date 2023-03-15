
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import CarInfo from './views/CarInfo' 


function App() {
  return(
    <BrowserRouter>
      <div>
        <nav>
          <ul className="navbar">
            <div className="logos">
              <h2 className="navHeader"></h2>
              <h2 className="navHeader1"></h2>
              <h2 className="navHeader2"></h2>
              <h2 className="navHeader3"></h2>
              <h2 className="navHeader4"></h2>
            </div>
            <p className="lucas">Lucas's Car Collection</p>
            <div className="navTitleBox">
            <li className="navTitle">
            <Link to="/" className="navText">Home</Link>
            </li>
            <li className="navTitle">
            <Link to="/inventory" className="navText">Inventory</Link>
            </li>
            <li className="navTitle">
            <Link to="/profile" className="navText">Profile</Link>
            </li>
            </div>
          </ul>
        </nav>
      </div>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cars/:id" element={<CarInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
