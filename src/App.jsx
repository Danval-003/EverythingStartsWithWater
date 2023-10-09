import { useState, React } from 'react'
import {
  InteractiveWater, Slider, Pills, AudioPlayer, Volume,
} from './components'
import './App.css'
import {
  IntroSlide, IntroductionSlide, WorldSlide, CycleWaterSlide, SweetWaterSlide, WorldSlide2, PolutionSlide, HelpSlide,
} from './pages'
import Languagues from './texts'

import Ima from './assets/desiertoIA.jpg'

const App = () => {
  const [index, setIndex] = useState(0)
  const [percentage, setPercentage] = useState(0.99)
  const [indexLanguage, setIndexLanguage] = useState(0)
  const [isBad, setIsBad] = useState(false)

  return (
    <div>
      <div style={{
        zIndex: 3, position: 'absolute', bottom: 0, right: 0,
      }}
      >
        <Pills options={['English', 'Español', 'Français']} setSelectedIndex={(c) => setIndexLanguage(c)} />
      </div>
      <div style={{ zIndex: 1, position: 'absolute', top: 0, right: 0, }}>
        <Slider currentIndex={index}>
          <IntroSlide
            goNext={() => { setIndex(1); setPercentage(0.95) }}
            texts={Languagues[indexLanguage].Slide1}
          />
          <CycleWaterSlide
            goNext={() => { setIndex(2); setPercentage(0.85) }}
            goReturn={() => { setIndex(0); setPercentage(1.0) }}
            texts={Languagues[indexLanguage].Slide4}
          />
          <SweetWaterSlide
            goReturn={() => { setIndex(1); setPercentage(0.9) }}
            goNext={() => { setIndex(3); setPercentage(0.75) }}
            texts={Languagues[indexLanguage].Slide3}
          />
          <WorldSlide
            goReturn={() => { setIndex(2); setPercentage(0.85) }}
            goNext={() => { setIndex(4); setPercentage(0.73) }}
            texts={Languagues[indexLanguage].WorldSlide}
          />
          <WorldSlide2
            goReturn={() => { setIndex(3); setPercentage(0.75) }}
            goNext={() => { setIndex(5); setPercentage(0.67) }}
            texts={Languagues[indexLanguage].WorldSlide2}
          />
          <IntroductionSlide
            goReturn={() => { setIndex(4); setPercentage(0.73) }}
            goNext={() => { setIndex(6); setPercentage(0.0); setIsBad(true) }}
            texts={Languagues[indexLanguage].Slide2}
          />
          <PolutionSlide
            goReturn={() => { setIndex(5); setPercentage(0.67); setIsBad(false) }}
            goNext={() => { setIndex(7); setPercentage(1.0); setIsBad(false) }}
            texts={Languagues[indexLanguage].PolutionSlide}
          />
          <HelpSlide
            goNext={() => { setIndex(0); setPercentage(1.0) }}
            goReturn={() => { setIndex(6); setPercentage(0.0); setIsBad(true) }}
            texts={Languagues[indexLanguage].HelpSlide}
          />
        </Slider>
      </div>
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
      <InteractiveWater percentaje={percentage} isBad={isBad} />
    </div>
  )
}

export default App
