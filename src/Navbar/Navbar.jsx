import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <header className='header' id='header'>
        <div className="nav container">

            <a href="#" className='nav__logo'>ANOUAR</a>
            
            <ul className='nav__menu' id='nav-menu'>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href="#home" className='nav__link'>

                            Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#about" className='nav__link'>
                            
                            About
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#skills" className='nav__link'>
                            
                            Skills
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#portfolio" className='nav__link'>
                            
                            Portfolio
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#contact" className='nav__link'>
                            
                            Contact Me
                        </a>
                    </li>
                </ul>

            </ul>
        </div>
    </header>
  )
}

export default Navbar