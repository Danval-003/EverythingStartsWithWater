import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { pillsContainer, pill, active } from './Pills.module.css'

const Pills = ({ options, setSelectedIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleOptionClick = (index) => {
    setActiveIndex(index)
    setSelectedIndex(index)
  }

  return (
    <div className={pillsContainer}>
      {options.map((option, index) => (
        <button
          className={`${pill} ${activeIndex === index ? active : ''}`}
          onClick={() => handleOptionClick(index)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  )
}

Pills.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
}

export default Pills
