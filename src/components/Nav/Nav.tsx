import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
const Nav: React.FC  = () => {
  return (
    <nav>
        <ul>
            <li>
              <NavLink to= "/photoDay">PhotoDay</NavLink>
            </li>
            <li>
              <NavLink to= "/rovers">Rovers</NavLink>
            </li>
            <li>
              <NavLink to= "/about">About</NavLink>
            </li>
        </ul>
      
    </nav>
  )
}

export default Nav
