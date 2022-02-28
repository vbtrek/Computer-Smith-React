import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryBlueButton from '../components/primary-blue-button'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Computer Smith</title>
        <meta property="og:title" content="Computer Smith" />
      </Helmet>
      <Header></Header>
      <div className={styles['Hero']}>
        <div className={styles['container1']}>
          <div className={styles['Card']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              Software Engineer.
            </h1>
            <span className={` ${styles['text1']} ${projectStyles['lead']} `}>
              <span>
                Experienced software engineer working primarily in C# with many
                years experience.
              </span>
            </span>
            <div className={styles['container2']}>
              <Link to="/contact" className={styles['navlink']}>
                <PrimaryBlueButton
                  button="contact me"
                  rootClassName="rootClassName"
                  className={styles['component1']}
                ></PrimaryBlueButton>
              </Link>
              <a
                href="https://www.buymeacoffee.com/dereksmith"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link']}
              >
                <img
                  alt="image"
                  src="/playground_assets/bmc-button-200h.png"
                  className={styles['image']}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/header-image-1500w.jpg"
        className={styles['image1']}
      />
    </div>
  )
}

export default Home
