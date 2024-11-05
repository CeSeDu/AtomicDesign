import React from 'react'
import FooterLink from '../atoms/FooterLink'

const FooterLinks = ({links, t}) => {
  return (
    <div className='flex text-white gap-5 text-center justify-center pb-4'>
        {
            links.map((link) => (
                <FooterLink>
                    {t(link.name)}
                </FooterLink>
            ))
        }
    </div>
  )
}

export default FooterLinks