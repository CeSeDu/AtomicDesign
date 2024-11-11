import React from 'react'
import ArticleImage from '../atoms/ArticleImage'
import ArticleTitle from '../atoms/ArticleTitle'
import ArticleBody from '../atoms/ArticleBody'

const Article = ({title, body, image}) => {
  return (
    <div className='flex justify-center items-center'>
        <ArticleImage src={image} alt={title} className="relative"/>
        <div className="absolute text-center grid items-center justify-center text-lg text-gray-800 bg-white bg-opacity-25 p-2 rounded-2xl">
            <ArticleTitle title={title}/>
            <ArticleBody body={body}/>
        </div>
    </div>
  )
}

export default Article