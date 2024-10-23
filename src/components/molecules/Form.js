import React from 'react'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl';

function Form() {
  const t = useTranslations('Search');
  return (
 <form className='flex gap-2 bg-gray-800 p-2 rounded-lg w-max'>
    <input className='text-xs px-2 rounded-lg outline-none text-black' type='text' placeholder='Enter something...'/>
    <Button t={t}/>
 </form>
  )
}

export default Form