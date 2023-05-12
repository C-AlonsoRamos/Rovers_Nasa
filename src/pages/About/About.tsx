import React from 'react'
import './About.css'


const About:React.FC = () => {
  return (
    <main>
      <section className='aboutSection'>
        <article className='apod'>
          <h2>The Astronomy Picture of the Day</h2>
           <p>The Astronomy Picture of the Day (APOD) is a website maintained by NASA and Michigan Technological University. According to the website, "every day, a different image or photo of our universe is shown, with a short explanation written by a professional astronomer." The photograph shown is not necessarily taken on the same day it is shown, and sometimes photos are shown that have already appeared before.</p>
        </article>
        <article className='mars-rover'>
          <h2>Mars rover</h2>
           <p>A Martian rover (motorized space exploration vehicle) specifically designed to move across the surface of the planet Mars by rolling. These vehicles have several advantages over stationary landers: they are capable of surveying larger areas of territory, they can be directed to areas of scientific interest, they can be placed in positions where they receive sunlight during the winter months, and they are capable of obtaining knowledge. environment to be controlled remotely.</p>
           <ul>
            <li>
           <span>CURIOSITY</span>, Mars Science Laboratory (MSL), created by NASA, launched on November 26, 2011 at 10:02 a.m. and touched down on the Aeolis Palus Plain near Aeolis Mons (nicknamed "Mount Sharp") in Gale Crater on August 6, 2012, at 05:31. Curiosity was still operating as of February 2023.
            </li>
            <li>
           <span>SPIRIT</span> (MER-A), the Mars Exploration Rover, was launched on June 10, 2003 at 13:58:47 and landed successfully on January 4, 2004. Nearly 6 years after the original mission limit ended, the Spirit had covered a total distance of 7.73 km, but its wheels got caught in the sand of the red planet. On January 26, 2010, it acknowledged that it had given up its efforts to release the rover and declared that it would be used as a stationary science platform.
            </li>
            <li>
           <span>OPPORTUNITY</span> (MER-B) was launched on July 7, 2003 at 23:18:15 and landed successfully on January 25, 2004. On March 20, 2010 Opportunity surpassed the previous mission longevity record in Mars, on July 28, 2014, surpassed the previous record for the distance traveled outside of Earth, covering a total distance of 40.25 km.
            </li>
           </ul>
        </article>
      </section>
     
    </main>
  )
}

export default About
