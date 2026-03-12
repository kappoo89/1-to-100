import { useEffect, useState } from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react';
import './App.css'

function App() {
  const [grid, setGrid] = useState(5)

  useEffect(() => {
    if (grid > 10) {
      setGrid(10)
    }

    if (grid < 2) {
      setGrid(2)
    }
  }, [grid])

  const speak = (text: string) => {
    const message = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(message)
  }

  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}>
        {
          Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="cell" onClick={() => speak((i + 1).toString())}>
              {i + 1}
            </div>
          ))
        }
      </div>
      {/* <div className="actions">
        <button onClick={() => setGrid((grid) => grid + 1)}>
          <ZoomOut />
        </button>
        <button onClick={() => setGrid((grid) => grid - 1)}>
          <ZoomIn />
        </button>
      </div> */}
    </>
  )
}

export default App
