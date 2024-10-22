import React from 'react'
import Header from '../organisms/Header'

const MainTemplate = ({children}) => {
  return (
    <div className='p-8'>
        <Header/>
        <main>{children}</main>
    </div>
  )
}

export default MainTemplate