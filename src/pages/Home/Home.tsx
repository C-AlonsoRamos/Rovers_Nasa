import React from 'react'
import './Home.css'
 const Home: React.FC = () => {
  return (
    <main>
      <div className='videos'>
      <video controls>
  <source src='https://res.cloudinary.com/dy4mossqz/video/upload/v1683905621/VIDEOS/JPL-20190502-MSLf-0001-1280_er2ufw.mp4'/>
</video>
<video controls>
  <source src='https://res.cloudinary.com/dy4mossqz/video/upload/v1683905511/VIDEOS/JPL_20190213_MERComplete-640_igo53m.mp4'/>
</video>
         <video controls>
  <source src='https://res.cloudinary.com/dy4mossqz/video/upload/v1683906647/VIDEOS/mer20150702-rover-eye-view-of-marathon-640_akbj6n.mp4'/>
</video>


      </div>
     
    </main>
  )
}

export  default Home
