import React from 'react';


function Navbar() {
    return (
        <nav>
          <span className='logo'>mr winny</span>  
          <ul>
              <li><a href ="/">Home</a></li>
              <li><a href ="/about">About</a></li>
              <li><a href ="/menu">Menu</a></li>
          </ul>
        </nav>
    )
}

export default Navbar
