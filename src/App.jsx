import { useState, React } from 'react'
import { Slider } from './components'
import './App.css'

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
          <button type="button" onClick={() => setIndex(1)}>
            Hola mundo
          </button>
        </div>
        <button type="button" onClick={() => setIndex(0)}>
          Adios Mundo
        </button>
      </Slider>
    </div>
  )
}

export default App
