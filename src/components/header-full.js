import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import projectStyles from '../style.module.css'
import styles from './header-full.module.css'

const HeaderFull = (props) => {
  return (
    <div className={` ${styles['Header']} ${styles[props.rootClassName]} `}>
      <nav className={styles['Nav']}>
        <div className={styles['container']}>
          <Link
            to="/"
            className={` ${styles['navlink']} ${projectStyles['large']} `}
          >
            Soft UI Design System
          </Link>
          <div className={styles['Menu']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['large']} `}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={` ${styles['navlink2']} ${projectStyles['large']} `}
            >
              Profile
            </Link>
            <span className={` ${styles['text']} ${projectStyles['large']} `}>
              Coming Soon
            </span>
          </div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
            </div>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

HeaderFull.defaultProps = {
  rootClassName: '',
}

HeaderFull.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeaderFull
