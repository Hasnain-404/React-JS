import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/about">About</NavLink>
        </div>
    )
}

export default NavBar