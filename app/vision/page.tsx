export default function VisionPage() {
  const manifestoQuotes = [
    "Music is the architecture of time.",
    "Visual art is the poetry of space.",
    "Together, they create dimensions beyond perception.",
    "We don't just produce content.",
    "We craft experiences that linger in memory",
    "long after the last note fades.",
    "Every collaboration is an exploration.",
    "Every project pushes boundaries.",
    "Every creation tells a story that matters.",
  ]

  const timeline = [
    {
      year: "2019",
      title: "Studio Founding",
      description: "Tony Leone establishes 8C Studios with a vision to merge visual arts and experimental sound.",
    },
    {
      year: "2020",
      title: "First Collaborative Release",
      description:
        "Launch of our debut collaborative project, setting the foundation for our unique artistic approach.",
    },
    {
      year: "2022",
      title: "Visual Synthesis Breakthrough",
      description: "Development of proprietary real-time visual generation techniques synchronized with audio.",
    },
    {
      year: "2024",
      title: "International Recognition",
      description: "Featured in major electronic music festivals and art exhibitions worldwide.",
    },
    {
      year: "2025",
      title: "Immersive Installations",
      description: "Expansion into large-scale immersive art installations and interactive experiences.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      {/* Manifesto Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-center text-[#d4af37] mb-16">Our Vision</h1>

        <div className="space-y-12">
          <div className="text-center fade-in fade-in-delay-1">
            <p className="font-cinzel text-xl md:text-2xl lg:text-3xl text-[#d4af37] leading-relaxed">
              "At 8C RECORDS, our vision is to redefine the soundscape of Indian music by championing raw, authentic, and boundary-breaking talent. We aim to create a platform where underground voices rise to the global stage—unfiltered, fearless, and unapologetically real. By fusing local roots with international influence, we strive to build a movement that represents the streets, inspires the youth, and reshapes the future of independent music culture. bcity, southside. Wolf roaring, guns, war weapons, Nike sneakers, and iced out diamond jewellery—this is our aesthetic. NO EGO WHEN WE GO."
            </p>
          </div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-white mb-16">Our Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#d4af37] transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } fade-in fade-in-delay-${Math.min(index + 1, 3)}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#d4af37] rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444444]">
                      <div className="text-[#d4af37] font-orbitron font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="font-orbitron font-bold text-xl text-white mb-3">{milestone.title}</h3>
                      <p className="text-[#cccccc] leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
