
import './App.css';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import CarInfo from './views/CarInfo'
import { AuthContext } from './contexts/AuthProvider'
import { useContext, useState } from 'react'



function App() {
  const { login, user, logout } = useContext(AuthContext)
  return(
    <BrowserRouter>
      <div className="outterNavBar">
        <nav>
          <ul className="navbar">
            <div className="logos">
              <h2 className="navHeader"></h2>
              <h2 className="navHeader1"></h2>
              <h2 className="navHeader2"></h2>
              <h2 className="navHeader3"></h2>
              <h2 className="navHeader4"></h2>
            </div>
            <p className="lucas">| Lucas's Garage Sale |</p>
            <div className="navTitleBox">
              <li className="navTitle">
              <Link to="/" className="navText">Home</Link>
              </li>
              {
                user.loggedIn ?
                <>
                <li className="navTitle">
                <Link to="/inventory" className="navText">Inventory</Link>
                </li>
                <li className="navTitle">
                <Link to="/profile" className="navText">Profile</Link>
                </li>
                </> :
                <></>
              }
            </div>
            <div className="logBox">
              {
                user.loggedIn ?
                <>
                <div className="user-logout">
                  <p className="userName">{user.displayName}</p>
                  <button className="logBtn" onClick={logout}>Logout</button>
                </div>
                </> :
                <button className="logBtn" onClick={login}>Login</button>
                
              }
            </div>
          </ul>
        </nav>
      </div>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/cars/:uid/:id" element={<CarInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
