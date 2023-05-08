import React from 'react'
import "./BaseLayout.css"

 interface BaseLayoutProps {
    children: React.ReactNode;
 }
const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <div className='gridLayout'>
        {children}

    </div>
  )
}

export default BaseLayout