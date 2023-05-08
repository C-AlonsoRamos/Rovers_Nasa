import React from 'react'


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