import { useState, React } from 'react'
import {
  InteractiveWater, Slider, CircularButton, RoundedButton,
} from './components'
import './App.css'
import {
  IntroSlide, IntroductionSlide,
} from './pages'
import { Espanol } from '@text'

const App = () => {
  const [index, setIndex] = useState(0)
  const [percentage, setPercentage] = useState(0.0)

  return (
    <div>
      <InteractiveWater percentaje={percentage} />
      <Slider currentIndex={index}>
        <IntroSlide goNext={() => { setIndex(0); setPercentage(1.0) }} texts={Espanol.Slide1} />
        <IntroductionSlide goNext={() => { setIndex(1); setPercentage(0.80) }} />
      </Slider>
    </div>
  )
}

export default App
