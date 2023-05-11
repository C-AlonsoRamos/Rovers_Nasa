import React from 'react'
import "./GalleryLayout.css"

 interface GalleryLayoutProps {
    children: React.ReactNode;
 }
const GalleryLayout = ({children}: GalleryLayoutProps) => {
  return (
    <div className='gridGalleryLayout'>
        {children}

    </div>
  )
}

export default GalleryLayout