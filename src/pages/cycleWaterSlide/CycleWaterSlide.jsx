// CycleWaterSlide.jsx

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  waterCycleContainer,
  waterCycleCircle,
  arrowContainer,
  arrow,
  waterCycleText,
  cycleAnimation,
} from './CycleWaterSlide.module.scss'

// import evaporationImage from '../../assets/evaporation.png'
// import condensationImage from '../../assets/condensation.png'
// import precipitationImage from '../../assets/precipitation.png'
// import runoffImage from '../../assets/runoff.png'

// const images = [evaporationImage, condensationImage, precipitationImage, runoffImage]

const CycleWaterSlide = ({ goNext, texts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className={waterCycleContainer}>
      <div className={waterCycleCircle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Ciclo del agua - Etapa ${index + 1}`}
            className={currentImageIndex === index ? 'active' : ''}
          />
        ))}
        <div className={arrowContainer}>
          <button onClick={handlePrevClick} type="button" className={arrow}>
            &#9664;
            {' '}
            {/* Flecha izquierda */}
          </button>
          <button onClick={handleNextClick} type="button" className={arrow}>
            &#9654;
            {' '}
            {/* Flecha derecha */}
          </button>
        </div>
      </div>
      <p className={waterCycleText}>{texts[0]}</p>
      <button onClick={goNext} type="button" className={cycleAnimation}>
        {texts[1]}
      </button>
    </div>
  )
}

CycleWaterSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

CycleWaterSlide.defaultProps = {
  goNext: null,
}

export default CycleWaterSlide
