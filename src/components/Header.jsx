import React from 'react';
import logo from './images/logo.svg';
import ArrowDown from './images/icon-arrow-down.svg';
import openIcon from './images/icon-hamburger.svg';
export default function Header() {

    const [open, setOpen] = React.useState('false');

    const huncleClickBtn = () => {
       setOpen(prevState => !prevState)
    }
    return (
        <>
          <header className='sunnyside-header'>
          <nav className='navbar'>
             <a href='#' className='logo'><img src={logo} alt="logo"/></a>
             <button className='btn-menu' onClick={huncleClickBtn}>
              <img src={openIcon} alt="open-icon"/>
             </button>
             <div className={open ? 'navbar-block active' : 'navbar-block'}>
             <ul className='navbar--toggle'>
               <li className='nav-item'><a href='#' className='navbar-link'>About</a></li>
               <li className='nav-item'><a href='#' className='navbar-link'>Services</a></li>
               <li className='nav-item'><a href='#' className='navbar-link'>Projects</a></li>
             </ul>
               <button className='btn'> Contact</button>
             </div>
          </nav>  
          <div className='header-info'>
             <h1 className='header-info-title'>We are creatives </h1>
             <div className='arrow-down'><img src={ArrowDown} alt="arrow-icon"/></div>
          </div>
          </header>
        </>
    )
}