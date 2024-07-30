import React from 'react';

import logo from './images/logo2.svg';

export default function Footer() {
    return (
        <footer>
          <div className='footer--logo'>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Projects</a></li>
          </ul>
          <div className='row-icons'>
             <div>
             <i class="fa-brands fa-square-facebook"></i>
             </div>
             <div>
             <i class="fa-brands fa-instagram"></i>
             </div>
             <div>
             <i class="fa-brands fa-twitter"></i>
             </div>
             <div>
             <i class="fa-brands fa-pinterest"></i>
             </div>
          </div>
        </footer>
    )
}