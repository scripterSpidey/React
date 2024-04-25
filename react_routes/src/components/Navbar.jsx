import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav>
        <button><NavLink to='/'>Home</NavLink></button>
        <button><NavLink to='/about'>About</NavLink></button>
      </nav>
    </div>
  )
}

export default Navbar
