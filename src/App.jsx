import { useState, React } from 'react'
import {
  InteractiveWater, Slider, CircularButton, RoundedButton,
} from './components'
import './App.css'
import { IntroSlide } from './pages'

const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <InteractiveWater percentaje={index / 2} />
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
          <CircularButton text="W" onClick={() => setIndex(1)} />
        </div>
        <RoundedButton text="😁" onClick={() => setIndex(2)} backgroundColor="rgb(220, 0, 0)" />
        <IntroSlide goNext={() => setIndex(0)} />
      </Slider>
    </div>
  )
}

export default App
