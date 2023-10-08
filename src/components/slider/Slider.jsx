import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  principal, sliderContent,
} from './Slider.module.css'

const Slider = ({ children, currentIndex }) => {
  const slideWidthRef = useRef(null)
  const [slideWidth, setSlideWidth] = useState(0)

  useEffect(() => {
    // Función para actualizar el ancho del slide
    const updateSlideWidth = () => {
      if (slideWidthRef.current) {
        setSlideWidth(slideWidthRef.current.clientWidth)
      }
    }

    // Actualiza el ancho del slide al cargar la página
    updateSlideWidth()

    // Actualiza el ancho del slide cuando cambie el tamaño de la ventana
    window.addEventListener('resize', updateSlideWidth)

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateSlideWidth)
    }
  }, [])

  useEffect(() => {
    // Ajusta la posición del slider cuando cambie currentIndex
    if (slideWidthRef.current) {
      slideWidthRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
  }, [currentIndex, slideWidth])

  return (
    <div className={principal}>
      <div className={sliderContent} ref={slideWidthRef}>
        <div
          className="slider-track"
          style={{
            transition: 'transform 0.5s ease',
            display: 'flex',
            width: `${children.length * 100}vw`,
          }}
        >
          {children.map((child, index) => (
            <div
              className={`slider-item ${index === currentIndex ? 'active' : ''}`}
              style={{
                width: `${slideWidth}px`,
              }}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  currentIndex: PropTypes.number,
}

Slider.defaultProps = {
  currentIndex: 0,
}

export default Slider
