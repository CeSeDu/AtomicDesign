import React from 'react'

const FooterLink = ({href, children}) => {
  return (
    <a href={href} >
       {children}
    </a>
  )
}

export default FooterLink