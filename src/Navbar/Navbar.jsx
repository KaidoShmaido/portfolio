import React from 'react'
import "./Navbar.css"
import logo from "../assets/react.svg"
const Navbar = () => {
  return (
    <div>

        <nav className="navbar">
            <a href="" className="logo">Anouar Maarouf</a>
                <div className="nav__links">
                    <ul>
                        <li> <a href="">
                                 <i class="uil uil-estate"></i>Home
                            </a>
                        </li>
                        <li> <a href="">
                                 <i class="uil uil-user"></i>User
                            </a>
                        </li>  <li> <a href="">
                                 <i class="uil uil-file-alt"></i>Skills
                            </a>
                        </li>  <li> <a href="">
                                 <i class="uil uil-briefcase-alt"></i>Portfolio
                            </a>
                        </li>  <li> <a href="">
                                 <i class="uil uil-message"></i>Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
  )
}

export default Navbar