import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import ArticleList from '../molecules/articleList'

const MainTemplate = ({children}) => {
  return (
    <div className='p-8'>
        <Header/>
        <ArticleList/>
        <Footer/>
        <main>{children}</main>
    </div>
  )
}

export default MainTemplate