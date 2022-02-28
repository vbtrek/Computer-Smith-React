import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import projectStyles from '../style.module.css'
import styles from './blog.module.css'

const Blog = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Computer Smith</title>
        <meta property="og:title" content="Blog - Computer Smith" />
      </Helmet>
      <Header rootClassName="rootClassName"></Header>
      <div className={styles['BlogPosts']}>
        <h1 className={` ${styles['text']} ${projectStyles['headingTwo']} `}>
          <span></span>
          <span>Latest posts in my blog</span>
          <br></br>
        </h1>
        <div className={styles['container1']}>
          <Link
            to="/blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e"
            className={styles['navlink']}
          >
            <BlogCard
              title="Upgrade HP Microserver from XPenology to TrueNAS SCALE"
              description=" "
              className={styles['component1']}
            ></BlogCard>
          </Link>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
      </div>
    </div>
  )
}

export default Blog
