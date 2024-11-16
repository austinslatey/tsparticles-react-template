import { useCallback, useState } from 'react'

import './App.css'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function App() {
  const [count, setCount] = useState(50)

  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <div className="App">
      <Particles options={{
        particles: {
          color: {
            value: "#fff"
          },
          number: {
            value: count
          },
          opacity: {
            value: { min: 0.3, max: 1 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          },
          move: {
            direction: "bottom-right",
            enable: true,
            speed: { min: 3, max: 5 },
            straight: true
          }
        }
      }} init={init} />
      <header className="App-header">

        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count * 1.2)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App