import { useState, React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import CircularButton from './components/CircularButton/CircularButton'

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    alert('¡Botón circular clickeado!');
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)} type="button">
          count is
          {' '}
          {count}
        </button>
        <div>
          <CircularButton text="<" backgroundColor="#409CD0" onClick={handleButtonClick} />
        </div>
        <p>
          Edit
          {' '}
          <code>src/App.jsx</code>
          {' '}
          Hola mundo
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
