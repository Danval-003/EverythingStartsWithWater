import React, { useEffect } from 'react'
import './InteractiveWater.scss'
import PropTypes from 'prop-types'
import arrow from '../../assets/arrow.png'
import rule from '../../assets/ruleModified.png'

const InteractiveWater = ({ percentaje, isBad }) => {
  const n = 12
  const width = 1800
  const height = 60

  useEffect(() => {
    const c = document.getElementById('canvas1')

    // Verificar si el elemento canvas está presente antes de continuar
    if (c) {
      const ctx = c.getContext('2d')
      c.width = width
      c.height = height

      const points = []
      for (let i = 0; i <= n + 1; i += 0.8) {
        const x = (width / n) * i + (-20 + Math.random() * 40)
        const y = 15 + Math.random() * 20
        points.push({
          x,
          y,
          ox: x,
          oy: y,
          t: Math.random() * 2 * Math.PI,
          s: 0.05 + Math.random() * 0.15,
          factor: 0.4 + Math.random() * 1.2,
        })
      }

      const tick = () => {
        ctx.clearRect(0, 0, c.width, c.height)
        ctx.beginPath()

        points.forEach((p, i) => {
          if (i > 0 || i < points.length - 1) {
            p.x = p.ox + -3 + Math.sin(p.t) * 6
            p.y = p.oy + Math.cos(p.t) * 8
          }

          p.s = {
            x:
              i === 0
                ? p.x - 0.5 * (points[i + 1].x - p.x)
                : p.x - 0.5 * (p.x - points[i - 1].x),
            y:
              i === 0
                ? points[i + 1].y - 0.5 * (points[i + 1].y - p.y)
                : p.y - 0.5 * (p.y - points[i - 1].y),
          }

          p.e = {
            x:
              i === points.length - 1
                ? p.x + 0.5 * (p.x - points[i - 1].x)
                : points[i + 1].x - 0.5 * (points[i + 1].x - p.x),
            y:
              i === points.length - 1
                ? p.y - 0.5 * (points[i].y - points[i - 1].y)
                : points[i + 1].y - 0.5 * (points[i + 1].y - p.y),
          }

          if (i === 0) {
            ctx.moveTo(p.s.x, p.s.y)
          }

          ctx.quadraticCurveTo(p.x, p.y, p.e.x, p.e.y)

          p.t += 0.1
        })

        ctx.lineWidth = 16
        ctx.strokeStyle = isBad ? '#135401' : '#8AD2FB'
        ctx.stroke()

        // close
        ctx.lineTo(width + 50, 70)
        ctx.lineTo(-50, 70)
        ctx.lineTo(-50, points[0].y)

        ctx.closePath()
        ctx.fillStyle = isBad ? '#424c00' : '#3fabea'
        ctx.fill()
        window.requestAnimationFrame(tick)
      }

      tick()
    }
  }, [])

  useEffect(() => {
    const c = document.getElementById('canvas1')

    // Verificar si el elemento canvas está presente antes de continuar
    if (c) {
      const ctx = c.getContext('2d')
      c.width = width
      c.height = height

      const points = []
      for (let i = 0; i <= n + 1; i += 0.8) {
        const x = (width / n) * i + (-20 + Math.random() * 40)
        const y = 15 + Math.random() * 20
        points.push({
          x,
          y,
          ox: x,
          oy: y,
          t: Math.random() * 2 * Math.PI,
          s: 0.05 + Math.random() * 0.15,
          factor: 0.4 + Math.random() * 1.2,
        })
      }

      const tick = () => {
        ctx.clearRect(0, 0, c.width, c.height)
        ctx.beginPath()

        points.forEach((p, i) => {
          if (i > 0 || i < points.length - 1) {
            p.x = p.ox + -3 + Math.sin(p.t) * 6
            p.y = p.oy + Math.cos(p.t) * 8
          }

          p.s = {
            x:
              i === 0
                ? p.x - 0.5 * (points[i + 1].x - p.x)
                : p.x - 0.5 * (p.x - points[i - 1].x),
            y:
              i === 0
                ? points[i + 1].y - 0.5 * (points[i + 1].y - p.y)
                : p.y - 0.5 * (p.y - points[i - 1].y),
          }

          p.e = {
            x:
              i === points.length - 1
                ? p.x + 0.5 * (p.x - points[i - 1].x)
                : points[i + 1].x - 0.5 * (points[i + 1].x - p.x),
            y:
              i === points.length - 1
                ? p.y - 0.5 * (points[i].y - points[i - 1].y)
                : points[i + 1].y - 0.5 * (points[i + 1].y - p.y),
          }

          if (i === 0) {
            ctx.moveTo(p.s.x, p.s.y)
          }

          ctx.quadraticCurveTo(p.x, p.y, p.e.x, p.e.y)

          p.t += 0.1
        })

        ctx.lineWidth = 16
        ctx.strokeStyle = isBad ? '#135401' : '#8AD2FB'
        ctx.stroke()

        // close
        ctx.lineTo(width + 50, 70)
        ctx.lineTo(-50, 70)
        ctx.lineTo(-50, points[0].y)

        ctx.closePath()
        ctx.fillStyle = isBad ? '#7f7d00' : '#3fabea'
        ctx.fill()
        window.requestAnimationFrame(tick)
      }

      tick()
    }
  }, [isBad])

  return (
    <div className="backdrop">
      <div className="water-meter">
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img src={rule} alt="Regla" className="rule-image" />
        <img
          src={arrow}
          alt="Flecha"
          className="arrow-image"
          style={{ top: `${(1 - percentaje) * 92}vh` }}
        />
      </div>
      <canvas id="canvas1" style={{transition: 'fill 0.5s ease'}} />
      <div
        id="filler"
        className="filler"
        style={{
          flex: `0 0 ${percentaje * 90}vh`,
          background: isBad ? '#7f7d00' : '#3fabea',
        }}
      />
    </div>
  )
}

InteractiveWater.propTypes = {
  percentaje: PropTypes.number,
  isBad: PropTypes.bool,
}

InteractiveWater.defaultProps = {
  percentaje: 0,
  isBad: false,
}

export default InteractiveWater
