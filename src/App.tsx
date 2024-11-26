import * as React from 'react'
import {motion} from 'framer-motion'

function App() {
  const [slides, setSlides] = React.useState([
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
    'Page 5'
  ])

  const handleSlideClick = (i: number) => {
    if (i == slides.length - 1) return
    const currentSlide = slides.at(i)
    setSlides(slides.filter(slide => slide != currentSlide))
  }

  return (
    <div className="App">
      <div className="slider">
        {slides.map((slide, i) => (
          <motion.div className="slide" onClick={() => handleSlideClick(i)} key={i} whileTap={{ scale: 0 }}>
            <h2>{slide}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App