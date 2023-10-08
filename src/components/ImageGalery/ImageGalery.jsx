import React, { useState } from 'react'
import cascade from '../../assets/cascade.png'
import cascada from '../../assets/cascada.png'
import paisaje from '../../assets/paisaje.png'
import naturaleza from '../../assets/naturaleza.png'
import rivers from '../../assets/rivers.png'
import ola from '../../assets/ola.png'
import './ImageGalery.css'

const ImageGalery = () => {
  const [isHeads1, setIsHeads1] = useState(true)
  const [isHeads2, setIsHeads2] = useState(true)
  const [isHeads3, setIsHeads3] = useState(true)

  const handleClick1 = () => {
    setIsHeads1(!isHeads1)
  }

  const handleClick2 = () => {
    setIsHeads2(!isHeads2)
  }

  const handleClick3 = () => {
    setIsHeads3(!isHeads3)
  }

  return (
    <div className="horizontal-image-list">
      <button>
        <img
          className={isHeads1 ? 'floating-animation' : ''}
          src={isHeads1 ? cascade : paisaje}
          alt="Coin"
          onClick={handleClick1}
        />
      </button>

      <button>
        <img
          className={isHeads2 ? 'floating-animation' : ''}
          src={isHeads2 ? cascada : naturaleza}
          alt="Coin"
          onClick={handleClick2}
        />
      </button>

      <button>
        <img
          className={isHeads3 ? 'floating-animation' : ''}
          src={isHeads3 ? rivers : ola}
          alt="Coin"
          onClick={handleClick3}
        />
      </button>

    </div>
  )
}

export default ImageGalery
