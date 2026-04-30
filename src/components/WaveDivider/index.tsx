import React from 'react'
import './WaveDivider.scss'

export default function WaveDivider() {
  return (
    <div className="wave-divider">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="wave-svg">
        <path
          d="M0,30 Q200,10 400,30 T800,30 T1200,30"
          stroke="#3498DB"
          fill="none"
          strokeWidth="2"
          opacity="0.35"
          className="wave-line wave-line--primary"
        />
        <path
          d="M0,40 Q200,60 400,40 T800,40 T1200,40"
          stroke="#F1948A"
          fill="none"
          strokeWidth="1"
          opacity="0.25"
          className="wave-line wave-line--secondary"
        />
      </svg>
    </div>
  )
}
