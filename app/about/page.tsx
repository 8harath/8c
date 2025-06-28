import Image from "next/image"

export default function AboutPage() {
  const approaches = [
    {
      title: "Experimental Sound Design",
      description:
        "We push the boundaries of audio production using cutting-edge techniques, field recordings, and innovative processing methods to create unique sonic landscapes.",
    },
    {
      title: "Visual Synthesis",
      description:
        "Our visual elements are not just accompaniments but integral parts of the artistic experience, created through real-time generation and carefully crafted aesthetics.",
    },
    {
      title: "Collaborative Process",
      description:
        "Every project is a journey of discovery, working closely with artists to explore uncharted territories and create something truly unprecedented.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      {/* Studio Introduction */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-[#d4af37] mb-8">About 8C RECORDS</h1>
            <div className="space-y-4 text-[#cccccc] text-lg leading-relaxed">
              <p className="fade-in">
                8C RECORDS is a rising powerhouse in India's independent music scene, known for its raw, boundary-pushing artistry. Spearheaded by 8C TONY, 8C SAM, and ADIPETTI, the label is a creative haven for genre-bending artists, especially in hip-hop, drill, and experimental sounds. bcity, southside.
              </p>
              <p className="fade-in fade-in-delay-1">
                What sets 8C apart is its bold aesthetic—think wolf roaring, guns, war weapons, Nike sneakers, and men iced out in diamond jewellery. The label's roster is stacked with authentic voices who rep their roots with pride, blending Indian influence with global flair. Visually, their videos are cinematic and streetwise—no compromises, just culture.
              </p>
              <p className="fade-in fade-in-delay-2">
                From sonic innovation to rebel energy, 8C RECORDS isn't just making music—it's shaping the sound of tomorrow's India. NO EGO WHEN WE GO.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden fade-in fade-in-delay-2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="8C Studios workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-white mb-16">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className={`bg-[#2a2a2a] p-8 rounded-lg border border-[#444444] card-hover fade-in fade-in-delay-${index + 1}`}
              >
                <h3 className="font-orbitron font-bold text-xl text-[#d4af37] mb-4">{approach.title}</h3>
                <p className="text-[#cccccc] leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
