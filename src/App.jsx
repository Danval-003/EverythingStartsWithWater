import { useState, React } from 'react'
import {
  InteractiveWater, Slider, Pills,
} from './components'
import './App.css'
import {
  IntroSlide, IntroductionSlide, WorldSlide, CycleWaterSlide, SweetWaterSlide,
} from './pages'
import Languagues from './texts'

import Ima from './assets/desiertoIA.jpg'

const App = () => {
  const [index, setIndex] = useState(0)
  const [percentage, setPercentage] = useState(1.0)
  const [indexLanguage, setIndexLanguage] = useState(0)

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
        <Pills options={['Español', 'English']} setSelectedIndex={(c) => setIndexLanguage(c)} />
      </div>
      <div style={{ zIndex: -1 }}>
        <InteractiveWater percentaje={percentage} />
      </div>
      <div style={{ zIndex: 1 }}>
        <Slider currentIndex={index}>
          <IntroSlide
            goNext={() => { setIndex(1); setPercentage(0.9) }}
            texts={Languagues[indexLanguage].Slide1}
          />
          <IntroductionSlide
            goNext={() => { setIndex(2); setPercentage(0.7) }}
            texts={Languagues[indexLanguage].Slide2}
          />
          <WorldSlide
            goNext={() => { setIndex(3); setPercentage(0.5) }}
            texts={Languagues[indexLanguage].WorldSlide}
          />
          <IntroductionSlide
            goNext={() => { setIndex(4); setPercentage(0.7) }}
            texts={Languagues[indexLanguage].Slide2}
          />
          <SweetWaterSlide
            goNext={() => { setIndex(5); setPercentage(0.7) }}
            texts={Languagues[indexLanguage].Slide3}
          />
          <CycleWaterSlide
            goNext={() => { setIndex(0); setPercentage(1.0) }}
            texts={Languagues[indexLanguage].Slide4}
          />
        </Slider>
      </div>
      <InteractiveWater percentaje={percentage} />
    </div>
  )
}

export default App
