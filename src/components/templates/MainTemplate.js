import React from 'react'
import Header from '../organisms/Header'
import ArticleList from '../molecules/articleList'

const MainTemplate = ({children}) => {
  return (
    <div className='p-8'>
        <Header/>
        <ArticleList/>
        <main>{children}</main>
    </div>
  )
}

export default MainTemplate