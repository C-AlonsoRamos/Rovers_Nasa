import React from 'react'
import './Home.css'
 const Home: React.FC = () => {
  return (
    <main>
      <div className='video'>
         <iframe src="https://www.youtube.com/embed/upLM5yGVKLg?&autoplay=1" title="Juntos perseveramos: El aterrizaje del rover Perseverance en Marte"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
     
    </main>
  )
}

export  default Home
