import Image from "next/image"
import Link from "next/link"

export default function ArtistsPage() {
  const artists = [
    {
      id: "tony-leone",
      name: "Tony Leone",
      role: "Founder / Visual Artist",
      bio: "Pioneering the fusion of digital art and experimental sound since 2019. Tony's background in electronic music production and visual arts creates the foundation for 8C Studios' unique aesthetic.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "ava-nyx",
      name: "Ava Nyx",
      role: "Sound Alchemist",
      bio: "Specializing in ambient soundscapes and field recording manipulation. Ava transforms everyday sounds into otherworldly experiences through innovative processing techniques.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "rayn-marq",
      name: "Rayn Marq",
      role: "Composer / Visual Synth Artist",
      bio: "Creating symphonic electronic compositions with real-time visual generation. Rayn's work bridges classical composition with modern electronic production.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-center text-[#d4af37] mb-16">Our Artists</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Link
              key={artist.id}
              href={`/artists/${artist.id}`}
              className={`group bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#444444] card-hover fade-in fade-in-delay-${index + 1}`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">{artist.name}</h3>
                <p className="text-[#d4af37] text-sm font-medium mb-3">{artist.role}</p>
                <p className="text-[#cccccc] text-sm leading-relaxed line-clamp-3">{artist.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
