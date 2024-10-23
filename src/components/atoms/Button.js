import React from 'react'

function Button({ t }) {
  return (
    <button className='border-green-400 border rounded-lg px-4 py-1 text-xs text-white hover:bg-green-400 hover:border-white'>{t('buttonText')}</button>
  )
}

export default Button;