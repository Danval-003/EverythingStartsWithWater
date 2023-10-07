import { useState, React } from 'react'
import {
InteractiveWater, Slider, CircularButton,
} from './components'
import './App.css'
import Welcome from './pages/welcome/Welcome'

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
        <Welcome setIndex={setIndex} index={0} />
      </Slider>
    </div>
  )
}

export default App
