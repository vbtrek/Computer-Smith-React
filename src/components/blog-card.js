import React from 'react'

import PropTypes from 'prop-types'

import NextButton from './next-button'
import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-card-image"
      />
      <h5 className="blog-card-text">{props.newProp}</h5>
      <h5 className="blog-card-text1">{props.date}</h5>
      <span>{props.description}</span>
      <NextButton button="Read more"></NextButton>
    </div>
  )
}

BlogCard.defaultProps = {
  rootClassName: '',
  imageAlt: 'image',
  description: '',
  newProp: 'TODO Title',
  imageSrc:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxibG9nJTIwcG9zdHxlbnwwfHx8fDE2NDYwMDcyODQ&ixlib=rb-1.2.1&w=200',
  date: 'dd-mmm-yyyy',
}

BlogCard.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
  date: PropTypes.string,
}

export default BlogCard
