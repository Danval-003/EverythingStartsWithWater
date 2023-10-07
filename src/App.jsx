import { useState, React } from 'react'
import {
  InteractiveWater, Slider, CircularButton, RoundedButton,
} from './components'
import './App.css'
import {
  IntroSlide, IntroductionSlide,
} from './pages'

const App = () => {
  const [index, setIndex] = useState(0)
  const [percentage, setPercentage] = useState(0.0)

  return (
    <div>
      <InteractiveWater percentaje={percentage} />
      <Slider currentIndex={index}>
        <div style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          display: 'flex',
          placeItems: 'center',
          backgroundColor: 'white',
          height: '100vh',
        }}
        >
          <CircularButton text="W" onClick={() => { setIndex(1); setPercentage(1) }} />
        </div>
        <RoundedButton text="😁" onClick={() => { setIndex(2); setPercentage(0.90) }} backgroundColor="rgb(220, 0, 0)" />
        <IntroSlide goNext={() => { setIndex(3); setPercentage(0.80) }} />
        <IntroductionSlide goNext={() => { setIndex(0); setPercentage(0.70) }} />
      </Slider>
    </div>
  )
}

export default App
