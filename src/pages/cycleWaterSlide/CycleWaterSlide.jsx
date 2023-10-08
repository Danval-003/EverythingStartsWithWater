// CycleWaterSlide.jsx

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '../../components'
import {
  waterCycleContainer,
  waterCycleCircle,
  arrowContainer,
  arrow,
  waterTitleText,
  waterCycleText,
  cycleAnimation,
  splitElements,
} from './CycleWaterSlide.module.scss'

// import evaporationImage from '../../assets/evaporation.png'
// import condensationImage from '../../assets/condensation.png'
// import precipitationImage from '../../assets/precipitation.png'
// import runoffImage from '../../assets/runoff.png'
import evaporationImage from '../../assets/evaporation.gif'
import transpirationImage from '../../assets/transpiration.gif'
import condensationImage from '../../assets/condensation.gif'
import precipitationImage from '../../assets/precipitation.gif'
import runoffImage from '../../assets/runoff.gif'
import groundwaterImage from '../../assets/groundwater.gif'

const images = [evaporationImage,
  transpirationImage, condensationImage, precipitationImage, runoffImage, groundwaterImage]

const CycleWaterSlide = ({ goNext, texts, goReturn }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    console.log(currentImageIndex)
    console.log("images", images)
  }, [currentImageIndex, setCurrentImageIndex])

  return (
    <div className={waterCycleContainer}>
      <h1>{texts.info[0]}</h1>
      <div className={splitElements}>
        <div className={waterTitleText}>
          <h1>{texts.title[currentImageIndex]}</h1>
          <p className={waterCycleText}>{texts.text[currentImageIndex]}</p>
        </div>
        <div className={waterCycleCircle}>
          <img
            src={images[currentImageIndex]}
            alt={`Ciclo del agua - Etapa ${currentImageIndex + 1}`}
            className="active"
          />
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
      </div>

      <div className={cycleAnimation}>
        <RoundedButton onClick={goReturn} text={texts.info[3]} />
        <RoundedButton onClick={goNext} text={texts.info[2]} />
      </div>
    </div>
  )
}

CycleWaterSlide.propTypes = {
  goNext: PropTypes.func,
  goReturn: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

CycleWaterSlide.defaultProps = {
  goNext: null,
  goReturn: null,
}

export default CycleWaterSlide
