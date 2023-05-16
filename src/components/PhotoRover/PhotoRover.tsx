import React from 'react';React
import "./PhotoRover.css"
import { Photo } from '../../pages/Rovers/Rovers'

interface RoverProps {
    data: Photo;
  }


const PhotoRover= ({data}:RoverProps) => {
  return (
    <figure className='imgRover'>
      <img src={data.img_src} alt={data.camera.full_name} />
    </figure>
  )
}

export default PhotoRover
