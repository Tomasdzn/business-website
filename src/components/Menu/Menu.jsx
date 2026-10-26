import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";

import './Menu.css'

const Menu = () => {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <button
        className='menu-toggle'
        type='button'
        aria-label='Open menu'
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <HiBars3 />
      </button>
      <div className={`menu-container${open ? ' open' : ''}`}>
        <a href='#about' onClick={close}>About</a>
        <a href='#work' onClick={close}>Work</a>
        <a href='#team' onClick={close}>Team</a>
        <a href='#blog' onClick={close}>Blog</a>
        <a href='#contact' onClick={close}>Contact</a>
      </div>
    </>
  )
}

export default Menu
