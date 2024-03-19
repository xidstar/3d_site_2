/* eslint-disable no-unused-vars */
import React from 'react'
import { logo } from '../assets'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logo} alt="SEWP logo" className='w-[3rem] h-[3rem] rounded-full' />
    </NavLink>
  )
}

export default Logo