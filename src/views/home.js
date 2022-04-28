import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryBlueButton from '../components/primary-blue-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Computer Smith</title>
        <meta property="og:title" content="Computer Smith" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-card">
            <h1 className="home-text headingOne">Software Engineer.</h1>
            <span className="home-text1 lead">
              <span>
                Experienced software engineer working primarily in C# with many
                years experience.
              </span>
            </span>
            <div className="home-container2">
              <Link to="/contact" className="home-navlink">
                <PrimaryBlueButton
                  button="contact me"
                  rootClassName="primary-blue-button-root-class-name"
                  className="home-component1"
                ></PrimaryBlueButton>
              </Link>
              <a
                href="https://www.buymeacoffee.com/dereksmith"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <img
                  alt="image"
                  src="/playground_assets/bmc-button-200h.png"
                  className="home-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/header-image-1500w.jpg"
        className="home-image1"
      />
    </div>
  )
}

export default Home
