import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';


function Navbar() {
    return (
        <div className='Navbar '>
            <a href='/'> <img src={logo} className='logo' alt='log zoo' /></a>
            <div className='navigation'>
                <a className='navigation-link' href="https://www.google.com/search?q=google+font+vscode&rlz=1C1CHBF_frFR882FR882&oq=google+font+vscode+&aqs=chrome..69i57j0i22i30j69i64.3360j0j7&sourceid=chrome&ie=UTF-8">Nos Animaux</a>
                <a className='navigation-link' href="/">À Propos</a>
                <a className='navigation-link' href="/">Contact</a>
            </div>



        </div>



    )
}

export default Navbar
