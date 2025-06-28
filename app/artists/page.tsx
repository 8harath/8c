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
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-center text-[#d4af37] mb-16">Our Artists</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#444444] card-hover fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {artist.spotifyUrl && (
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1db954] p-2 rounded-full hover:bg-[#1ed760] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Music size={16} />
                    </a>
                  )}
                  {artist.instagramUrl && (
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">{artist.name}</h3>
                <p className="text-[#d4af37] text-sm font-medium mb-3">{artist.role}</p>
                <p className="text-[#cccccc] text-sm leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{artist.bio}</p>
                
                {/* Social Links */}
                <div className="flex gap-2">
                  {artist.spotifyUrl ? (
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#1db954] text-xs hover:text-[#1ed760] transition-colors"
                    >
                      <Music size={12} />
                      Spotify
                    </a>
                  ) : (
                    <span className="text-[#666666] text-xs">Spotify: coming soon</span>
                  )}
                  {artist.instagramUrl && (
                    <a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-purple-400 text-xs hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={12} />
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
