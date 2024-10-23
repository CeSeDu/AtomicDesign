import React from 'react'

function LanguageSwitcher({onChange, currentLocale}) {
    const languages = ['en','tr']
    const handleLanguageChange = (event) => {
        onChange(event.target.value);
    }
  return (
    <select value={currentLocale} onChange={(e) => onChange(e.target.value)} className='border rounded-lg p-1'>
        {
            languages.map((lang) => (
                <option key={lang} value={lang}>
                    {lang === 'en' ? 'English' : 'Türkçe'}  
                </option>
            ))
        }
    </select>
  )
}

export default LanguageSwitcher;