"use client"

import { useState, useEffect } from "react"

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.classList.add('body-lock')

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            document.body.classList.remove('body-lock')
          }, 800)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => {
      clearInterval(interval)
      document.body.classList.remove('body-lock')
    }
  }, [])

  // Stable block counts for structure
  const foundationBlocksCount = 5
  const wallBlocksCount = 8
  const roofBlocksCount = 2

  // Progress-based activation logic
  const activeFoundationBlocks = Math.min(5, Math.floor((progress / 100) * 15))
  const activeWallBlocks = Math.max(0, Math.min(8, Math.floor(((progress - 20) / 100) * 15)))
  const activeRoofBlocks = Math.max(0, Math.min(2, Math.floor(((progress - 70) / 100) * 15)))

  return (
    <div
      id="preloader-container"
      className={`fixed inset-0 bg-gray-900 z-[9999] flex items-center justify-center transition-all duration-700 ease-in-out ${
        isComplete ? "hidden-preloader" : "opacity-100 visible"
      }`}
    >
      <div className="text-center">
        {/* Building Animation */}
        <div className="mb-8">
          <div className="flex flex-col items-center w-48 h-48 mx-auto justify-end">
            {/* Roof Row */}
            <div id="roof-row" className="flex justify-center mb-1">
              {Array.from({ length: roofBlocksCount }).map((_, i) => (
                <div
                  key={`r-${i}`}
                  id={`r-${i}`}
                  className={`w-8 h-6 mx-0.5 transition-all duration-500 roof-clip ${
                    i < activeRoofBlocks
                      ? "bg-red-600 shadow-lg scale-100 opacity-100"
                      : "bg-gray-700 scale-75 opacity-50"
                  }`}
                />
              ))}
            </div>

            {/* Wall Rows (Building bottom-up) */}
            <div id="wall-rows" className="flex flex-col-reverse items-center">
              {[0, 1, 2, 3].map((rowIndex) => (
                <div key={`wall-row-${rowIndex}`} className="flex justify-center mb-1">
                  {[0, 1].map((colIndex) => {
                    const blockIndex = rowIndex * 2 + colIndex
                    return (
                      <div
                        key={`w-${blockIndex}`}
                        id={`w-${blockIndex}`}
                        className={`w-8 h-8 mx-0.5 transition-all duration-500 ${
                          blockIndex < activeWallBlocks
                            ? "bg-orange-500 shadow-lg scale-100 opacity-100"
                            : "bg-gray-700 scale-75 opacity-50"
                        }`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>

            {/* Foundation Row */}
            <div id="foundation-row" className="flex justify-center">
              {Array.from({ length: foundationBlocksCount }).map((_, i) => (
                <div
                  key={`f-${i}`}
                  id={`f-${i}`}
                  className={`w-8 h-6 mx-0.5 transition-all duration-500 ${
                    i < activeFoundationBlocks
                      ? "bg-gray-500 shadow-lg scale-100 opacity-100"
                      : "bg-gray-800 border border-gray-700 scale-75 opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Logo and Text */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-yellow-500 mb-2 font-cool-jazz tracking-wider">
            DADA MJENZI
          </h1>
          <p className="text-orange-500 text-sm uppercase tracking-widest font-semibold">
            Building Your Houses
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div
            id="progress-bar"
            className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p id="progress-text" className="text-gray-400 text-sm mt-2 tabular-nums">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}
