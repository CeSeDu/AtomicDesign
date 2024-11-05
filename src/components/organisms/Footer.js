"use effect "
import React from 'react'
import FooterLinks from '../molecules/FooterLinks'
import footerData from '../../data/footerData'
import SocialMediaLinks from '../molecules/SocialMediaLinks'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('Footer')
  return (
    <footer className='grid items-center p-4 rounded-lg bg-gray-800'>

<div className='flex gap-12 justify-between px-12 w-full'>
    <FooterLinks links={footerData.links} t={t}/>

    <SocialMediaLinks SocialMedia={footerData.socialMedia}/>
    </div>
    <p className='text-xs pt-4 text-white text-center'> 
        &copy; {new Date().getFullYear()} {t('companyName')}. {t('copyright')}
    </p>
    </footer>
  )
}

export default Footer