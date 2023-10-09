import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '../../components'
import './HelpSlide.css'

const HelpSlide = ({ goNext, texts, goReturn }) => {
  const [tip1Expanded, setTip1Expanded] = useState(false)
  const [tip2Expanded, setTip2Expanded] = useState(false)
  const [tip3Expanded, setTip3Expanded] = useState(false)
  const [tip4Expanded, setTip4Expanded] = useState(false)

  const toggleTip1 = () => {
    setTip1Expanded(!tip1Expanded)
  }

  const toggleTip2 = () => {
    setTip2Expanded(!tip2Expanded)
  }

  const toggleTip3 = () => {
    setTip3Expanded(!tip3Expanded)
  }

  const toggleTip4 = () => {
    setTip4Expanded(!tip4Expanded)
  }

  return (
    <div className="help-slide">
      <h1 className="title">{texts[0]}</h1>
      <div className="tip-container">
        <div
          className={`tip ${tip1Expanded ? 'expanded' : ''}`}
          onClick={toggleTip1}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleTip1()
            }
          }}
          role="button"
          tabIndex={0}
        >
          <h2 className="tip-title">{texts[1]}</h2>
          <p className={`tip-description ${tip2Expanded ? 'visible' : ''}`}>{texts[2]}</p>
          <button
            type="button"
            className={`interactive-button ${tip1Expanded ? 'hidden' : ''}`}
            onClick={(e) => {
              e.stopPropagation() // Evita que se propague el clic al elemento padre
              toggleTip1()
            }}
          >
            {texts[3]}
          </button>
          <div className={`interactive-gif ${tip1Expanded ? 'visible' : ''}`} />
          <div className={`progress-bar ${tip1Expanded ? 'visible' : ''}`} />
        </div>
        <div
          className={`tip ${tip2Expanded ? 'expanded' : ''}`}
          onClick={toggleTip2}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleTip2()
            }
          }}
          role="button"
          tabIndex={0}
        >
          <h2 className="tip-title">{texts[4]}</h2>
          <p className={`tip-description ${tip2Expanded ? 'visible' : ''}`}>{texts[5]}</p>
          <button
            type="button"
            className={`interactive-button ${tip2Expanded ? 'hidden' : ''}`}
          >
            {texts[6]}
          </button>
          <div className={`interactive-video ${tip2Expanded ? 'visible' : ''}`} />
          <div className={`progress-bar ${tip2Expanded ? 'visible' : ''}`} />
        </div>
        <div
          className={`tip ${tip3Expanded ? 'expanded' : ''}`}
          onClick={toggleTip3}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleTip3()
            }
          }}
          role="button"
          tabIndex={0}
        >
          <h2 className="tip-title">{texts[7]}</h2>
          <p className={`tip-description ${tip3Expanded ? 'visible' : ''}`}>
            {texts[8]}
          </p>
          <button
            type="button"
            className={`interactive-button ${tip3Expanded ? 'hidden' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              toggleTip3()
            }}
          >
            {texts[9]}
          </button>
          <div className={`interactive-gif ${tip3Expanded ? 'visible' : ''}`} />
          <div className={`progress-bar ${tip3Expanded ? 'visible' : ''}`} />
        </div>
        <div
          className={`tip ${tip4Expanded ? 'expanded' : ''}`}
          onClick={toggleTip4}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleTip4()
            }
          }}
          role="button"
          tabIndex={0}
        >
          <h2 className="tip-title">{texts[10]}</h2>
          <p className={`tip-description ${tip4Expanded ? 'visible' : ''}`}>{texts[11]}</p>
          <button
            type="button"
            className={`interactive-button ${tip4Expanded ? 'hidden' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              toggleTip4()
            }}
          >
            {texts[12]}
          </button>
          <div className={`interactive-gif ${tip4Expanded ? 'visible' : ''}`} />
          <div className={`progress-bar ${tip4Expanded ? 'visible' : ''}`} />
        </div>

      </div>
      <div className="cycleAnimation">
        <RoundedButton onClick={goReturn} text={texts[14]} />
        <RoundedButton onClick={goNext} text={texts[13]} />
      </div>
    </div>
  )
}

HelpSlide.propTypes = {
  goNext: PropTypes.func,
  goReturn: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

HelpSlide.defaultProps = {
  goNext: null,
  goReturn: null,
}

export default HelpSlide
