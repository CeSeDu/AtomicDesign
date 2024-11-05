import React from 'react'
import SocialMediaLink from '../atoms/SocialMediaLink'

const SocialMediaLinks = ({SocialMedia}) => {
  return (
    <div className='flex text-white gap-5 text-center justify-center'>
        {
            SocialMedia.map((social) => (
                <SocialMediaLink name={social.name}/>
            ))
        }
    </div>
  )
}

export default SocialMediaLinks;