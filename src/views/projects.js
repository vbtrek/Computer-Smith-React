import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './projects.module.css'

const Projects = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Projects - Computer Smith</title>
        <meta property="og:title" content="Projects - Computer Smith" />
      </Helmet>
      <Header></Header>
    </div>
  )
}

export default Projects
