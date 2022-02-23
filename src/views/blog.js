import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import styles from './blog.module.css'

const Blog = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Computer Smith</title>
        <meta property="og:title" content="Blog - Computer Smith" />
      </Helmet>
      <Header rootClassName="rootClassName"></Header>
      <div className={styles['Hero']}>
        <BlogCard rootClassName="rootClassName"></BlogCard>
      </div>
    </div>
  )
}

export default Blog
