import React from 'react'
import './Header.css'
import img1 from '../photos/none.png'

function Header() {
  return (
    <div className='header-main'>
    <div className='header-all'>
    <h5 className='header-sum'>Summer 2022</h5>
    <h1 className='header-coll'>New Collection</h1>
    <h4 className='header-para'>We Know how large object will act.
        But thing on a small scale.
    </h4>
    <button className='header-btn'>Shop Now</button>
    </div>
    <div className='header-img'>
      <img src={img1} alt='...'/>
    </div>

    </div>
  )
}

export default Header
