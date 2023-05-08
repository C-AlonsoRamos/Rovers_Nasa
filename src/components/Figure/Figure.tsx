import React from 'react'
import "./Figure.css"
import { Apod } from '../../pages/PhotoDay/PhotoDay';

interface FigureProps {
    data: Apod;
  }

const Figure = ({data}: FigureProps) =>  {
  return (
    <figure className='photo'>
      <img src={data.url} alt={data.title} />
      <div className="card">
        <div className="title-card">
          <h2 className="title">{data.title}</h2>
        </div>
        <div className="date-cr">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div className="description">{data.explanation}</div>
      </div>
    </figure>
  )
}

export default Figure
