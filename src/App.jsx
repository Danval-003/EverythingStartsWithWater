import { useState, React } from 'react'
import {
  InteractiveWater, Slider, CircularButton, RoundedButton, Pills,
} from './components'
import './App.css'
import {
  IntroSlide, IntroductionSlide,
} from './pages'
import Languagues from '@text'

const App = () => {
  const [index, setIndex] = useState(0)
  const [percentage, setPercentage] = useState(1.0)
  const [indexLanguage, setIndexLanguage] = useState(0)

  return (
    <div>
      <div style={{
        zIndex: 3, position: 'absolute', bottom: 0, right: 0,
      }}
      >
        <Pills options={['Español', 'English']} setSelectedIndex={(c) => setIndexLanguage(c)} />
      </div>
      <div style={{ zIndex: -1 }}>
        <InteractiveWater percentaje={percentage} />
      </div>
      <div style={{ zIndex: 1 }}>
        <Slider currentIndex={index}>
          <IntroSlide goNext={() => { setIndex(1); setPercentage(0.9) }} texts={Languagues[indexLanguage].Slide1} />
          <IntroductionSlide goNext={() => { setIndex(0); setPercentage(1.0) }} />
        </Slider>
      </div>
    </div>
  )
}

export default App
