import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Menu />
      <Button isContact={true} text='CONTACT US'/>
    </nav>
  )
}

export default Navbar
