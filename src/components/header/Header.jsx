import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import Social from './Social'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
         <h5>Hello i am</h5>
         <h1>Aksha Malik</h1>
         <h5 className='text-light'>Fullstack Developer</h5>
         <CTA/>
         <Social/>
         <div className="me">
          <img src={ME} alt="error"/>
         </div>
         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header