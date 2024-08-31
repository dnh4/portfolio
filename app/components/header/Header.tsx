import React, { useState } from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='relative rounded-xl font-work mb-24'>
        <nav className='nav flex justify-between items-center p-4'>
            <a href="#" className='logo text-xl font-bold'>Dinahasina</a>
            <ul className='nav_menu flex hidden md:block'>
                <li className='nav_item'><a href="#about" className='nav_link'>Aceuil</a></li>
                <li className='nav_item'><a href="#about" className='nav_link'>À propos</a></li>
                <li className='nav_item'><a href="#about" className='nav_link'>Experiances</a></li>
                <li className='nav_item'><a href="#about" className='nav_link'>Compétences</a></li>
                <li className='nav_item'><a href="#about" className='nav_link'>Projets</a></li>
                <li className='nav_item'><a href="#about" className='nav_link'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
