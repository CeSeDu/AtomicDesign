import React from 'react'
import articles from '../../data/articles.json';
import { useLocale, useTranslations } from 'next-intl';

const articleList = () => {
    const locale = useLocale();
    const t = useTranslations('ArticleList');
  return (
    <div className='p-6 mx-auto m-12'>
        <ul className='flex-col columns-4 gap-12'>
            {
                articles.map((article) => (
                    <li className='border rounded-lg p-5 text-center m-2' key={article.id}>
                        <h3 className='font-bold text-2xl h-16'>{article.title[locale]}</h3>
                        <p>{article.content[locale]}</p>
                        <img src={article.image} className="w-full h-48 rounded-lg mt-4 object-cover mb-4"  />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default articleList