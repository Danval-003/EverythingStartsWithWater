import { useState, React } from 'react'
import {
  InteractiveWater, Slider, CircularButton, RoundedButton,
} from './components'
import './App.css'
import { IntroSlide } from './pages'
import { Espanol } from '@text'

const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <InteractiveWater percentaje={index / 2} />
      <Slider currentIndex={index}>
        <IntroSlide goNext={() => setIndex(0)} texts={Espanol.Slide1} />
        <div></div>
      </Slider>
    </div>
  )
}

export default App
