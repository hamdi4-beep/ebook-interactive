import * as React from 'react'
import {motion} from 'framer-motion'

function App() {
  const handleClick = (e: React.MouseEvent) => console.log(e.target)

  return (
    <div className="App">
      <div className="slider" onClick={handleClick}>
        <motion.div className="slide slide-1" whileTap={{
          scale: 0.5
        }}>
          <h2>Slide 1</h2>
        </motion.div>

        <div className="slide slide-2">
          <h2>Slide 2</h2>
        </div>
      </div>
    </div>
  )
}

export default App