import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink">
            <img
              alt={props.image_alt}
              src="/playground_assets/cs-webnode-about-200h.png"
              className="header-image"
            />
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink1 large">
              Home
            </Link>
            <Link to="/projects" className="header-navlink2 large">
              Projects
            </Link>
            <Link to="/blog" className="header-navlink3 large">
              <span className="">Blog</span>
            </Link>
            <Link to="/contact" className="header-navlink4 large">
              <span className="">Contact</span>
            </Link>
          </div>
          <div className="header-container1">
            <div data-type="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink5 large">
            Soft UI Design System
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-link large">
              Home
            </Link>
            <Link to="/contact" className="header-navlink6 large">
              Profile
            </Link>
            <span className="header-text2 large">Coming Soon</span>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: 'c1491fda-129f-4ad1-b71b-9287ab1aecf6',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
