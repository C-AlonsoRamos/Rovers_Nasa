import React from 'react'
import './Footer.css'
const Footer: React.FC  = () => {
  return (
    <footer>
      <h3>Made by C.AlonRam</h3>
      <div className='footer-social'>
        <a href="https://github.com/C-AlonsoRamos" target="_blank" ><img src="https://res.cloudinary.com/dy4mossqz/image/upload/v1682675341/img/github_qpssx6.png" alt="logo GitHub" /></a>
        <a href="https://www.linkedin.com/in/cristian-alonso-ramos-60749b256/" target="_blank" ><img src="https://res.cloudinary.com/dy4mossqz/image/upload/v1683538731/img/linkedin-original_fs74pv.svg" alt="logo Linkedin" /></a>
      </div>
    </footer>
  )
}

export default Footer
