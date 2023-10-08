import React from 'react'
import PropTypes from 'prop-types'
import styles from './StickerMaker.module.css'

const StickerMaker = ({ imageUrl }) => (
  <div className={styles.stickerContainer}>
    <svg className={styles.stickerImage} xmlns="http://www.w3.org/2000/svg">
      <image href={imageUrl} width="100%" height="100%" />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        stroke="white"
        strokeWidth="5"
        fill="none"
        rx="10" // Para bordes redondeados
      />
    </svg>
  </div>
)

StickerMaker.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default StickerMaker
