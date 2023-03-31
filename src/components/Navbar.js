import React, { useState } from "react";
import "./Navbar.css";
import { FaInstagramSquare, FaLinkedinIn, FaGithubSquare , FaReact} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
function Navbar(){
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div>
            <nav className="main-nav">
                <div className="logo">
                    <h1><span>R</span>eact  <FaReact /></h1>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "}>
                    <ul>
                        <li>
                            <a><Link to = '/' className="App">Home</Link></a>
                        </li>
                        <li>
                            <a><Link to = '/AboutUs' className="App">AboutUs</Link></a>
                        </li>
                        <li>
                            <a><Link to = '/ContactUs' className="App">ContactUs</Link></a>
                        </li>
                   </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.linkedin.com/in/veera-sai-mahidhar/" target="_blank"><FaLinkedinIn  className="linkedin"/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/whacky_0705/?r=nametag" target="_blank"><FaInstagramSquare className="instagram" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/veera1234-c" target="_blank"><FaGithubSquare className="facebook" /></a>
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons) }> <GiHamburgerMenu />   </a>
                    </div>
                </div>
            </nav>
        </div>
    );  
}
export default Navbar;