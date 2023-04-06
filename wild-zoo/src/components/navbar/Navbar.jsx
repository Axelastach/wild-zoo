import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';


function Navbar() {
    return (
        <div className='Navbar '>
           <a href='/'> <img src={logo} className='logo' alt='log zoo' /></a>
           <div className='navigation'>
            <a className='navigation-link' href="/">Nos Animaux</a>
            <a className='navigation-link' href="/">À Propos</a>
            <a className='navigation-link' href="/">Contact</a>
           </div>



        </div>

        
        
    )
}

export default Navbar
