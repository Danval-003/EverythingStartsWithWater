import { useState, React } from 'react'
import Slider from './components/slider/Slider'
import InteractiveWater from './components/interactiveWater/InteractiveWater'
import './App.css'
// import InteractiveWater from './components/interactiveWater/InteractiveWater'
import CircularButton from './components/CircularButton/CircularButton'
import RoundedButton from './components/RoundedButton/RoundedButton'

const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <InteractiveWater percentaje={index} />
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
        <RoundedButton text="😁" onClick={() => setIndex(0)} backgroundColor="rgb(220, 0, 0)" />
      </Slider>
    </div>
  )
}

export default App
