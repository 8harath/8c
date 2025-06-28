"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"

export default function MusicPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const releases = [
    {
      id: 1,
      title: "Echoes of Glass",
      artist: "Tony Leone x Ava Nyx",
      date: "March 2024",
      genre: "Ambient Electronic",
      year: "2024",
      coverArt: "/placeholder.svg?height=280&width=280",
      spotifyUrl: "#",
      appleMusicUrl: "#",
    },
    {
      id: 2,
      title: "Neon Monk",
      artist: "Rayn Marq",
      date: "August 2024",
      genre: "Experimental Classical",
      year: "2024",
      coverArt: "/placeholder.svg?height=280&width=280",
      spotifyUrl: "#",
      appleMusicUrl: "#",
    },
    {
      id: 3,
      title: "Fade Into Stillness",
      artist: "Ava Nyx",
      date: "December 2024",
      genre: "Dark Ambient",
      year: "2024",
      coverArt: "/placeholder.svg?height=280&width=280",
      spotifyUrl: "#",
      appleMusicUrl: "#",
    },
  ]

  const filters = ["All", "2024", "2023", "Tony Leone", "Ava Nyx", "Rayn Marq"]

  const filteredReleases = releases.filter((release) => {
    if (activeFilter === "All") return true
    if (activeFilter === "2024" || activeFilter === "2023") return release.year === activeFilter
    return release.artist.includes(activeFilter)
  })

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-center text-[#d4af37] mb-16">
          Music Releases
        </h1>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#d4af37] text-black font-medium"
                  : "bg-[#2a2a2a] text-[#cccccc] hover:bg-[#3a3a3a] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Release Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredReleases.map((release, index) => (
            <div
              key={release.id}
              className="group bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#444444] card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <Image
                  src={release.coverArt || "/placeholder.svg"}
                  alt={release.title}
                  width={280}
                  height={280}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="bg-[#d4af37] p-3 rounded-full hover:bg-[#6a4c93] transition-colors">
                      <Play size={20} fill="currentColor" />
                    </button>
                    <a
                      href={release.spotifyUrl}
                      className="bg-[#1db954] p-3 rounded-full hover:bg-[#1ed760] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-orbitron font-bold text-lg text-white mb-1">{release.title}</h3>
                <p className="text-[#d4af37] text-sm mb-1">{release.artist}</p>
                <p className="text-[#cccccc] text-xs">
                  {release.date} • {release.genre}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify Embed Example */}
        <div className="mt-16 max-w-md mx-auto">
          <h3 className="font-orbitron font-bold text-xl text-center text-white mb-6">Now Playing</h3>
          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <iframe
              src="https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
