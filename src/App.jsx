import { useState, React, useEffect } from 'react'
import {
  InteractiveWater, Slider, Pills,
} from './components'
import './App.css'
import {
  IntroSlide, IntroductionSlide, WorldSlide, CycleWaterSlide, SweetWaterSlide, WorldSlide2, HelpSlide,
} from './pages'
import Languagues from './texts'

import Ima from './assets/desiertoIA.jpg'

const App = () => {
  const [index, setIndex] = useState(0)
  const [percentage, setPercentage] = useState(0.99)
  const [indexLanguage, setIndexLanguage] = useState(0)

  useEffect(() => {
    console.log(Languagues[indexLanguage].HelpSlide)
  }, [])

  return (
    <div>
      <img
        src={Ima}
        alt="Mundo sin agua, Desierto"
        style={{
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <div style={{
        zIndex: 3, position: 'absolute', bottom: 0, right: 0,
      }}
      >
        <Pills options={['English', 'Español']} setSelectedIndex={(c) => setIndexLanguage(c)} />
      </div>
      <div style={{ zIndex: -1 }}>
        <InteractiveWater percentaje={percentage} />
      </div>
      <div style={{ zIndex: 1 }}>
        <Slider currentIndex={index}>
          <IntroSlide
            goNext={() => { setIndex(1); setPercentage(0.85) }}
            texts={Languagues[indexLanguage].Slide1}
          />
          <SweetWaterSlide
            goReturn={() => { setIndex(0); setPercentage(1.0) }}
            goNext={() => { setIndex(2); setPercentage(0.75) }}
            texts={Languagues[indexLanguage].Slide3}
          />
          <WorldSlide
            goReturn={() => { setIndex(1); setPercentage(0.85) }}
            goNext={() => { setIndex(3); setPercentage(0.73) }}
            texts={Languagues[indexLanguage].WorldSlide}
          />
          <WorldSlide2
            goReturn={() => { setIndex(2); setPercentage(0.75) }}
            goNext={() => { setIndex(4); setPercentage(0.67) }}
            texts={Languagues[indexLanguage].WorldSlide2}
          />
          <IntroductionSlide
            goReturn={() => { setIndex(3); setPercentage(0.73) }}
            goNext={() => { setIndex(5); setPercentage(0.64) }}
            texts={Languagues[indexLanguage].Slide2}
          />
          <CycleWaterSlide
            goReturn={() => { setIndex(4); setPercentage(0.67) }}
            goNext={() => { setIndex(6); setPercentage(1) }}
            texts={Languagues[indexLanguage].Slide4}
          />
          <HelpSlide
            goNext={() => { setIndex(0); setPercentage(1.0) }}
            goReturn={() => { setIndex(5); setPercentage(0.67) }}
            texts={Languagues[indexLanguage].HelpSlide}
          />
        </Slider>
      </div>
      <InteractiveWater percentaje={percentage} />
    </div>
  )
}

export default App
