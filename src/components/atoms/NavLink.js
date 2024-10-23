import React from 'react'

function NavLink({label, href}) {
  return (
    <div>
        <a className='hover:text-green-400 text-white'  href={href}>
            {label}
        </a>
    </div>
  )
}

export default NavLink;