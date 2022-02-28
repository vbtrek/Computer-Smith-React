import React from 'react'

import PropTypes from 'prop-types'

import NextButton from './next-button'
import styles from './blog-card.module.css'

const BlogCard = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h5 className={styles['text']}>{props.title}</h5>
      <span>{props.description}</span>
      <NextButton button="Read more"></NextButton>
    </div>
  )
}

BlogCard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  description: 'Summary',
  title: 'TODO Title',
  image_src:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxibG9nJTIwcG9zdHxlbnwwfHx8fDE2NDYwMDcyODQ&ixlib=rb-1.2.1&w=200',
}

BlogCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogCard
