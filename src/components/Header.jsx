import React from 'react';
import './header.scss';
import logo from '../assets/images/logo.svg';
import ham from '../assets/images/icon-hamburger.svg'
const Header = (props) => {
  return (
   <>
   <div className="hero">
    <div className="nav">
        <img className='brand' src={logo} alt="logo" />
        <img className='brand' src={ham} alt="hamburger menu" />
    </div>
    <div className="hero-text-wrapper">
        <h1><span>A modern</span> publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="btn-wrapper">
            <a href="" target="_blank" className='btn btn-primary'>
                <div>Start for free</div>
            </a>
            <a href="" target="_blank" className='btn btn-secondary'>
                <div>Learn More</div>
            </a>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Header