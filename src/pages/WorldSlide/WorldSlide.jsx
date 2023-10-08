import React from 'react'
import PropTypes from 'prop-types'
import {
  principal, secondary, smallVideoContainer, smallVideo, onWater, world,
} from './WorldSlide.module.scss'

import Earth from '../../assets/earth.gif'

const WorldSlide = ({ goNext, texts }) => (
  <div>
    <div className={principal}>
      <h1>{texts[0]}</h1>
      <p className={secondary}>
        {texts[1]}
      </p>
      <button onClick={goNext} type="button">
        {texts[2]}
      </button>
    </div>
    <img src={Earth} alt="JAksjdk" className={world} />
  </div>

)

WorldSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

WorldSlide.defaultProps = {
  goNext: null,
}

export default WorldSlide
