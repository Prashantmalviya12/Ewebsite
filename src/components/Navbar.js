import React from 'react'
import Admin from './Fonts/Admin'
import Basket from './Fonts/Basket'
import Heart from './Fonts/Heart'
import Search from './Fonts/Search'
import './Navbar.css'


function Navbar(props) {
  return (
    <div>
      <div className='navbar-header'>
        <h3 className='navbar-header3'>Acciojob</h3>
        <nav className='navbar-'>
            <ul>
                <li>
                  <a href='/'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/'>

                    Shop
                  </a>
                </li>
                <li>
                  <a href='/'>
                    About
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Blog

                  </a>
                </li>
                <li>
                  <a href='/'>
                    Pages
                  </a>
                </li>
            </ul>
        </nav>
        <div className='navbar-login'>
          <Admin/>
            <h4>Login/Ragister</h4>
            <Search/>
            <Basket/>1
            <Heart/>1
        </div>
      </div>
    </div>
  )
}

export default Navbar
