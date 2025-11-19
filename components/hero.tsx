"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Volume2, Music, Sparkles } from "lucide-react"

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const tracks = [
    { title: "Echoes of Glass", artist: "Tony Leone x Ava Nyx", duration: "3:42" },
    { title: "Neon Monk", artist: "Rayn Marq", duration: "4:15" },
    { title: "Fade Into Stillness", artist: "Ava Nyx", duration: "5:23" },
  ]

  const lyrics = [
    "Sound waves crash through digital dreams",
    "Bass drops heavy, reality screams",
    "We craft the future in every beat",
    "Where art and music finally meet",
  ]

  const [currentLyric, setCurrentLyric] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLyric((prev) => (prev + 1) % lyrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Interactive Parallax Background */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern"></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-[#d4af37] to-[#6a4c93] opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}

        {/* Floating Music Notes with Enhanced Animation */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`note-${i}`}
            className="absolute text-[#d4af37] opacity-20 animate-float-diagonal"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          >
            <Music />
          </div>
        ))}

        {/* Sparkle Effects */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-[#d4af37] opacity-40 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 15 + 10}px`,
            }}
          >
            <Sparkles />
          </div>
        ))}

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[#6a4c93] to-[#d4af37] rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-tl from-[#d4af37] to-[#6a4c93] rounded-full blur-3xl opacity-15 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Enhanced Sound Wave Visualization */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-32 md:h-40 opacity-30 px-2">
          {[...Array(60)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="bg-gradient-to-t from-[#d4af37] to-[#6a4c93] w-1 md:w-2 rounded-t-full sound-wave-bar"
              style={{
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${Math.random() * 1 + 1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          {/* Animated Title with Glow Effect */}
          <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#d4af37] mb-6 fade-in glow-text-enhanced animate-text-glow">
            8C RECORDS
          </h1>

          {/* Subtitle with Smooth Transition */}
          <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden">
            <p className="font-cinzel text-base sm:text-lg md:text-xl lg:text-2xl text-white fade-in transition-all duration-700 ease-in-out px-4" style={{ animationDelay: "0.5s" }}>
              {lyrics[currentLyric]}
            </p>
          </div>
        </div>

        {/* Enhanced Mini Player */}
        <div className="bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 border border-[#444444] hover:border-[#d4af37] transition-all duration-500 fade-in shadow-2xl hover:shadow-[#d4af37]/20 transform hover:scale-[1.02]" style={{ animationDelay: "1s" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-gradient-to-br from-[#d4af37] to-[#6a4c93] p-3 sm:p-4 rounded-full hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                {isPlaying ? <Pause size={24} fill="currentColor" className="relative z-10" /> : <Play size={24} fill="currentColor" className="relative z-10" />}
              </button>
              <div className="text-left flex-1 sm:flex-initial">
                <h3 className="font-orbitron font-bold text-white text-sm sm:text-base md:text-lg truncate max-w-[200px] sm:max-w-none">{tracks[currentTrack].title}</h3>
                <p className="text-[#cccccc] text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">{tracks[currentTrack].artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
              <Volume2 size={18} className="text-[#d4af37]" />
              <span className="text-[#cccccc] text-xs sm:text-sm font-medium">{tracks[currentTrack].duration}</span>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="w-full bg-[#2a2a2a] rounded-full h-2 sm:h-3 mb-4 sm:mb-6 overflow-hidden relative group cursor-pointer">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-[#d4af37] via-[#6a4c93] to-[#d4af37] bg-size-200 animate-gradient-shift relative"
              style={{ width: isPlaying ? "60%" : "30%" }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Track List with Enhanced Indicators */}
          <div className="flex gap-2 sm:gap-3 justify-center">
            {tracks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTrack(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentTrack === index
                    ? "bg-gradient-to-br from-[#d4af37] to-[#6a4c93] scale-125 shadow-lg shadow-[#d4af37]/50"
                    : "bg-[#444444] hover:bg-[#666666] hover:scale-110"
                }`}
                aria-label={`Track ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center fade-in px-4" style={{ animationDelay: "1.5s" }}>
          <button className="group relative bg-gradient-to-r from-[#d4af37] to-[#6a4c93] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#d4af37]/50 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative z-10 text-sm sm:text-base">Listen Now</span>
          </button>
          <button className="group relative border-2 border-[#d4af37] text-[#d4af37] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#6a4c93] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-sm sm:text-base">View Artists</span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator fade-in hidden sm:block" style={{ animationDelay: "2s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#d4af37] text-xs sm:text-sm font-medium animate-pulse">Scroll for more</span>
          <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-[#d4af37] rounded-full flex justify-center hover:border-[#6a4c93] transition-colors duration-300 cursor-pointer">
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-[#d4af37] to-[#6a4c93] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
