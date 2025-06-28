"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Volume2, Music } from "lucide-react"

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)

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

  return (
    <section className="relative h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Music Notes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#d4af37] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
          >
            <Music className="animate-bounce" style={{ animationDuration: `${Math.random() * 3 + 2}s` }} />
          </div>
        ))}

        {/* Pulsing Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6a4c93] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Sound Wave Visualization */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-32 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="bg-[#d4af37] w-2 rounded-t-full"
              style={{
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-8xl text-[#d4af37] mb-4 fade-in">
            8C RECORDS
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="font-cinzel text-lg md:text-xl lg:text-2xl text-white fade-in transition-all duration-500" style={{ animationDelay: "0.5s" }}>
              {lyrics[currentLyric]}
            </p>
          </div>
        </div>

        {/* Mini Player */}
        <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 mb-8 border border-[#444444] fade-in" style={{ animationDelay: "1s" }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#d4af37] p-3 rounded-full hover:bg-[#6a4c93] transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
              </button>
              <div>
                <h3 className="font-orbitron font-bold text-white text-left">{tracks[currentTrack].title}</h3>
                <p className="text-[#cccccc] text-sm text-left">{tracks[currentTrack].artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 size={20} className="text-[#d4af37]" />
              <span className="text-[#cccccc] text-sm">{tracks[currentTrack].duration}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#2a2a2a] rounded-full h-2 mb-4">
            <div
              className="bg-[#d4af37] h-2 rounded-full transition-all duration-300"
              style={{ width: isPlaying ? "60%" : "30%" }}
            ></div>
          </div>

          {/* Track List */}
          <div className="flex gap-2 justify-center">
            {tracks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTrack(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTrack === index ? "bg-[#d4af37]" : "bg-[#444444] hover:bg-[#666666]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: "1.5s" }}>
          <button className="bg-[#d4af37] text-black font-bold px-8 py-4 rounded-full hover:bg-[#6a4c93] hover:text-white transition-all duration-300 hover:scale-105">
            Listen Now
          </button>
          <button className="border-2 border-[#d4af37] text-[#d4af37] font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:scale-105">
            View Artists
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#d4af37] text-sm font-medium">Scroll for more</span>
          <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
