import React, { useState } from 'react'

const PillButton = ({ label, onClick }) => (
  <button className="pill-button" onClick={onClick}>
    {label}
  </button>
)

const ValueDisplay = ({ value }) => <div className="value-display">{value}</div>

const PillsCounter = ({count, setCount}) => {

  const increment = () => {
    setCount(count + 0.1)
  }

  const decrement = () => {
    setCount(count - 0.1)
  }

  return (
    <div className="pills-counter">
      <PillButton label="+" onClick={increment} />
      <ValueDisplay value={count} />
      <PillButton label="-" onClick={decrement} />
    </div>
  )
}

export default PillsCounter
