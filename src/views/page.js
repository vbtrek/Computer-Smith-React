import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - Computer Smith</title>
        <meta property="og:title" content="Page - Computer Smith" />
      </Helmet>
    </div>
  )
}

export default Page
