import React from 'react'

import PropTypes from 'prop-types'

import NextButton from './next-button'
import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <h5 className="blog-card-text">{props.title}</h5>
      <h5 className="blog-card-text1">{props.Date}</h5>
      <span className="">{props.description}</span>
      <NextButton button="Read more" className=""></NextButton>
    </div>
  )
}

BlogCard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  description: '',
  title: 'TODO Title',
  image_src:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxibG9nJTIwcG9zdHxlbnwwfHx8fDE2NDYwMDcyODQ&ixlib=rb-1.2.1&w=200',
  Date: 'dd-mmm-yyyy',
}

BlogCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  Date: PropTypes.string,
}

export default BlogCard
