import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Computer Smith</title>
        <meta property="og:title" content="Blog - Computer Smith" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="blog-blog-posts">
        <h1 className="blog-text headingTwo">
          <span></span>
          <span>Latest posts in my blog</span>
          <br></br>
        </h1>
        <div className="blog-container1">
          <Link
            to="/blog-page001-upgrade-h-p-microserver-from-x-penology-to-true-n-a-s-s-c-a-l-e"
            className="blog-navlink"
          >
            <BlogCard
              Date="17-Nov-2021"
              title="Upgrade HP Microserver from XPenology to TrueNAS SCALE"
              className="blog-component1"
            ></BlogCard>
          </Link>
          <Link
            to="/blog-page002-the-road-to-apple-car-play-in-an-older-car"
            className="blog-navlink1"
          >
            <BlogCard
              Date="31-Jan-2021"
              title="The Road to Apple CarPlay in an older car"
              className="blog-component2"
            ></BlogCard>
          </Link>
          <Link
            to="/blog-page003-flashing-costco-feit-smart-bulbs-with-tasmota"
            className="blog-navlink2"
          >
            <BlogCard
              Date="05-Jan-2021"
              title="Flashing Costco Feit Smart Bulbs with Tasmota"
              className="blog-component3"
            ></BlogCard>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog
