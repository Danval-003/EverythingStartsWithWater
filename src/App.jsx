import { useState, React } from 'react'
import { Slider } from './components'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Slider>
        <div style={{
          position: 'fixed', top: 0, bottom: 0, display: 'flex', placeItems: 'center',
          backgroundColor: 'white',
          height: '100vh',
        }}
        >
          <button type="button">
            Hola mundo
          </button>
        </div>
        <button type="button">
          Adios Mundo
        </button>
      </Slider>
    </div>
  )
}

export default App
