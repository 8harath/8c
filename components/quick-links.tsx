import Image from "next/image"
import Link from "next/link"
import { Play, Users, Camera, Headphones, Mic, Music2, Radio, Disc3 } from "lucide-react"

export default function QuickLinks() {
  const featuredContent = [
    {
      title: "Latest Drop",
      subtitle: "Echoes of Glass",
      description:
        "Tony Leone x Ava Nyx deliver a haunting masterpiece that blends ethereal vocals with crushing beats",
      icon: <Play size={24} />,
      href: "/music",
      image: "/placeholder.svg?height=300&width=400",
      badge: "NEW",
      stats: "2.1M plays",
    },
    {
      title: "Artist Spotlight",
      subtitle: "Rayn Marq",
      description:
        "From classical composer to electronic pioneer - discover the mind behind our most experimental tracks",
      icon: <Users size={24} />,
      href: "/artists",
      image: "/placeholder.svg?height=300&width=400",
      badge: "FEATURED",
      stats: "Rising Star",
    },
    {
      title: "Studio Sessions",
      subtitle: "Behind the Beats",
      description: "Exclusive footage from our latest recording sessions - see how the magic happens in real time",
      icon: <Camera size={24} />,
      href: "/behind-scenes",
      image: "/placeholder.svg?height=300&width=400",
      badge: "EXCLUSIVE",
      stats: "12 videos",
    },
  ]

  const quickStats = [
    { icon: <Headphones size={32} />, number: "50M+", label: "Total Streams" },
    { icon: <Mic size={32} />, number: "25+", label: "Artists" },
    { icon: <Music2 size={32} />, number: "100+", label: "Tracks Released" },
    { icon: <Radio size={32} />, number: "15+", label: "Radio Plays" },
  ]

  const genres = [
    "Experimental Hip-Hop",
    "Dark Ambient",
    "Electronic Fusion",
    "Avant-Garde Rap",
    "Cinematic Beats",
    "Industrial Sound",
    "Neo-Soul",
    "Trap Fusion",
  ]

  const recentActivity = [
    { action: "New track uploaded", track: "Midnight Cipher", time: "2h ago" },
    { action: "Artist collaboration", track: "Ava Nyx x Tony Leone", time: "5h ago" },
    { action: "Live session recorded", track: "Studio Session #47", time: "1d ago" },
    { action: "Remix released", track: "Neon Monk (VIP Mix)", time: "2d ago" },
  ]

  return (
    <div className="bg-[#0a0a0a] py-20">
      {/* Stats Section - Enhanced */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {quickStats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-4 sm:p-6 rounded-xl border border-[#444444] hover:border-[#d4af37] transition-all duration-500 fade-in relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-[#6a4c93]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-[#d4af37] mb-3 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{stat.icon}</div>
                <div className="font-orbitron font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-1 group-hover:text-[#d4af37] transition-colors duration-300">{stat.number}</div>
                <div className="text-[#cccccc] text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#6a4c93] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-white mb-12">
          What's <span className="text-[#d4af37]">Hot</span> Right Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredContent.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#444444] hover:border-[#d4af37] transition-all duration-500 fade-in transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/30 transition-all duration-500"></div>

                {/* Badge with Animation */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#6a4c93] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {item.badge}
                </div>

                {/* Enhanced Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-gradient-to-br from-[#d4af37] to-[#6a4c93] p-5 rounded-full transform scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-[#d4af37]/50 animate-pulse">
                    {item.icon}
                  </div>
                </div>

                {/* Stats with Gradient */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-[#d4af37] text-xs font-medium border border-[#d4af37]/30 group-hover:border-[#d4af37] transition-all duration-300">
                  {item.stats}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-orbitron font-bold text-base sm:text-lg text-white group-hover:text-[#d4af37] transition-colors duration-300">{item.title}</h3>
                  <Disc3 size={16} className="text-[#d4af37] group-hover:animate-spin transition-all duration-300" style={{ animationDuration: "2s" }} />
                </div>
                <h4 className="text-[#d4af37] font-medium mb-3 text-sm sm:text-base group-hover:text-[#6a4c93] transition-colors duration-300">{item.subtitle}</h4>
                <p className="text-[#cccccc] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{item.description}</p>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Genre Tags - Enhanced */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-center text-white mb-8 sm:mb-12">
          Our <span className="text-gradient">Sound</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {genres.map((genre, index) => (
            <span
              key={genre}
              className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] text-[#cccccc] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-[#444444] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 cursor-pointer fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">#{genre.replace(" ", "")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-[#6a4c93]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </span>
          ))}
        </div>
      </section>

      {/* Recent Activity Feed - Enhanced */}
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-center text-white mb-8 sm:mb-12">
          Live <span className="text-gradient">Feed</span>
        </h2>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-[#444444] hover:border-[#d4af37] transition-all duration-500 p-4 sm:p-6 shadow-xl">
          <div className="space-y-3 sm:space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl hover:from-[#3a3a3a] hover:to-[#2a2a2a] transition-all duration-500 fade-in border border-transparent hover:border-[#d4af37]/30 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-[#6a4c93]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 sm:gap-4 relative z-10 mb-2 sm:mb-0">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse shadow-lg shadow-[#d4af37]/50"></div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base group-hover:text-[#d4af37] transition-colors duration-300">{activity.action}</p>
                    <p className="text-[#d4af37] text-xs sm:text-sm font-semibold">{activity.track}</p>
                  </div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm relative z-10 pl-6 sm:pl-0">{activity.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <Link
              href="/music"
              className="group inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-full border border-[#d4af37] hover:bg-[#d4af37] hover:text-black transform hover:scale-105"
            >
              <span>View all activity</span>
              <Play size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
