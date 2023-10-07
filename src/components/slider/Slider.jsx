import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  principal, boton, sliderContent, sliderButton,
} from './Slider.module.css'

const Slider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideWidthRef = useRef(null) // Referencia al elemento del slide

  useEffect(() => {
    // Al actualizar el componente, obtén el ancho del elemento del slide
    if (slideWidthRef.current) {
      const slideWidth = slideWidthRef.current.clientWidth
      slideWidthRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
  }, [currentIndex])

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1))
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className={principal}>
      <div className={sliderContent} ref={slideWidthRef}>
        <div
          className="slider-track"
          style={{
            transition: 'transform 0.5s ease', // Animación de desplazamiento
            display: 'flex',
            width: `${children.length * 100}vw`, // Tamaño total del slider
          }}
        >
          {children.map((child) => (
            <div
              className="slider-item"
              style={{
                width: '100vw', // Tamaño fijo de 100vw para cada componente hijo
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className={`${boton} ${sliderButton}`} onClick={goToPreviousSlide} type="button">
        Anterior
      </button>
      <button className={`${boton} ${sliderButton}`} onClick={goToNextSlide} type="button">
        Siguiente
      </button>
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired, // Se espera que "children" sea un nodo React
}

export default Slider
