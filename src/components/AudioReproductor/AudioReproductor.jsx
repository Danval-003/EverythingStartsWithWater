import React, { useState, useRef } from 'react'
import audioGav from '../../assets/sg.mp3'
import RoundedButton from '../RoundedButton'
import './AudioPlayer.css'
import PillsCounter from '../PillsCounter/PillsCounter'

const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)

  // Función para pausar o reproducir el audio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Función para ajustar el volumen
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    audioRef.current.volume = newVolume
    setVolume(newVolume)
  }

  return (
    <div style={{ zIndex: 5 }} className="audio-container">
      <button
        onClick={togglePlay}
        type="button"
      >
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      />
      <PillsCounter count={volume} setCount={setVolume}/>

      <audio ref={audioRef}>
        <source src={audioGav} type="audio/mpeg" />
      </audio>

    </div>
  )
}

export default AudioPlayer
