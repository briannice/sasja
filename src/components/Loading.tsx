import React from 'react'

export default function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 100"
        className="h-8 w-24 text-primary"
      >
        <circle fill="currentColor" cx="50" cy="50" r="20">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 0; 0 30; 0 0; 0 -30; 0 0"
            repeatCount="indefinite"
            begin="0.0"
          />
        </circle>
        <circle fill="currentColor" stroke="none" cx="150" cy="50" r="20">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 0; 0 30; 0 0; 0 -30; 0 0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="currentColor" stroke="none" cx="250" cy="50" r="20">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 0; 0 30; 0 0; 0 -30; 0 0"
            repeatCount="indefinite"
            begin="0.4"
          />
        </circle>
      </svg>
    </div>
  )
}
