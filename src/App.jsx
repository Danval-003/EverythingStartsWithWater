import { useState, React } from 'react'
import { Slider } from './components'
import './App.css'
import CircularButton from './components/CircularButton/CircularButton'
import RoundedButton from './components/RoundedButton/RoundedButton'

const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <div>
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
          <CircularButton text="つ﹏⊂" onClick={() => setIndex(1)} />
        </div>
        <RoundedButton text="😁" onClick={() => setIndex(0)} />
      </Slider>
    </div>
  )
}

export default App
