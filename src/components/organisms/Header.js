import React from 'react'
import Logo from '../atoms/Logo'
import NavLink from '../atoms/NavLink'
import Form from '../molecules/Form'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-2 rounded-lg bg-gray-800'>
        <Logo/>
        <nav className='flex gap-12'>
            <NavLink label={"Home"} href={"/"}/>
            <NavLink label={"About"} href={"/about"}/>
            <NavLink label={"Contact"} href={"/Contact"}/>
        </nav>
        <Form/>
    </header>
  )
}

export default Header