import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'


 const Header: React.FC = () => {
  return (
    <header>
     <Link to= "/">
        <img src= "https://res.cloudinary.com/dy4mossqz/image/upload/v1676306880/img/Nasa_vqf70c.png" />
     </Link>
     <Nav />
    </header>
  )
}

export default Header