"use client"

import Image from "next/image"
import Link from "next/link"
import { Music, ExternalLink } from "lucide-react"

export default function ArtistsPage() {
  const artists = [
    {
      id: "8c-tony",
      name: "8C TONY",
      role: "Founder / Lead Artist",
      bio: "Spearheading 8C RECORDS with raw, boundary-pushing artistry. From bcity to southside, Tony's vision drives the label's bold aesthetic and fearless production. Wolf energy, no ego when we go.",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/artist/4dgvjJXnVc0LsMcPxJ1G2l?si=8Q6W02hnQoaeBw4lYG-71g",
      instagramUrl: "https://www.instagram.com/8c.tony?igsh=MTdvdXJwa2thbWMwbA==",
    },
    {
      id: "8c-sam",
      name: "8C SAM",
      role: "Artist / Producer",
      bio: "Bringing the heat from the underground. Sam's authentic voice and streetwise production style embody the 8C RECORDS ethos. Iced out with diamond jewellery, representing the culture.",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: null, // yet to come
      instagramUrl: "https://www.instagram.com/8c_sam?igsh=NXFic2E2ejN4YWcy",
    },
    {
      id: "adipetti",
      name: "ADIPETTI",
      role: "Artist / Creative Force",
      bio: "Pushing boundaries with experimental sounds and cinematic visuals. Adipetti's work blends Indian influence with global flair, creating the signature 8C RECORDS sound that's shaping tomorrow's India.",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/artist/3xc0HXO4HGJI3KVD0bI8ZR?si=GcU2HCQLQtCNHOmRy_NzLQ",
      instagramUrl: "https://www.instagram.com/adipetti?igsh=c3dodXE2YWFrdWpz",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="py-12 sm:py-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gradient mb-12 sm:mb-16 fade-in glow-text-enhanced">
          Our Artists
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl overflow-hidden border border-[#444444] hover:border-[#d4af37] transition-all duration-500 fade-in transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#d4af37]/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>

                {/* Social Links Overlay - Enhanced */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {artist.spotifyUrl && (
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1db954] p-3 rounded-full hover:bg-[#1ed760] transition-all duration-300 shadow-lg hover:shadow-[#1db954]/50 hover:scale-110 active:scale-95"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Spotify"
                    >
                      <Music size={18} />
                    </a>
                  )}
                  {artist.instagramUrl && (
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-110 active:scale-95"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Instagram"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Name Overlay on Image */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white drop-shadow-lg">
                    {artist.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                  {artist.name}
                </h3>
                <p className="text-[#d4af37] text-sm sm:text-base font-medium mb-3 sm:mb-4 group-hover:text-[#6a4c93] transition-colors duration-300">
                  {artist.role}
                </p>
                <p className="text-[#cccccc] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 overflow-hidden group-hover:text-white transition-colors duration-300" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                  {artist.bio}
                </p>

                {/* Social Links - Enhanced */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {artist.spotifyUrl ? (
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#1db954] text-xs sm:text-sm hover:text-[#1ed760] transition-all duration-300 px-3 py-1.5 rounded-full border border-[#1db954]/30 hover:border-[#1db954] hover:bg-[#1db954]/10"
                    >
                      <Music size={14} />
                      <span>Spotify</span>
                    </a>
                  ) : (
                    <span className="text-[#666666] text-xs sm:text-sm px-3 py-1.5 rounded-full border border-[#444444] italic">
                      Spotify: coming soon
                    </span>
                  )}
                  {artist.instagramUrl && (
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-purple-400 text-xs sm:text-sm hover:text-purple-300 transition-all duration-300 px-3 py-1.5 rounded-full border border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/10"
                    >
                      <ExternalLink size={14} />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
