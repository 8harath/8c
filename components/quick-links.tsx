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
      {/* Stats Section */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {quickStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center bg-[#1a1a1a] p-6 rounded-lg border border-[#444444] hover:border-[#d4af37] transition-all duration-300 fade-in fade-in-delay-${index + 1}`}
            >
              <div className="text-[#d4af37] mb-3 flex justify-center">{stat.icon}</div>
              <div className="font-orbitron font-bold text-2xl text-white mb-1">{stat.number}</div>
              <div className="text-[#cccccc] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center text-white mb-12">
          What's <span className="text-[#d4af37]">Hot</span> Right Now
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredContent.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#444444] card-hover fade-in fade-in-delay-${index + 1}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#d4af37] text-black px-3 py-1 rounded-full text-xs font-bold">
                  {item.badge}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#d4af37] p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-[#d4af37] text-xs font-medium">
                  {item.stats}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-orbitron font-bold text-lg text-white">{item.title}</h3>
                  <Disc3 size={16} className="text-[#d4af37] animate-spin" style={{ animationDuration: "3s" }} />
                </div>
                <h4 className="text-[#d4af37] font-medium mb-3">{item.subtitle}</h4>
                <p className="text-[#cccccc] text-sm leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Genre Tags */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="font-orbitron font-bold text-2xl text-center text-white mb-8">
          Our <span className="text-[#d4af37]">Sound</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {genres.map((genre, index) => (
            <span
              key={genre}
              className={`bg-[#2a2a2a] text-[#cccccc] px-4 py-2 rounded-full text-sm border border-[#444444] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 cursor-pointer fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              #{genre.replace(" ", "")}
            </span>
          ))}
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="font-orbitron font-bold text-2xl text-center text-white mb-8">
          Live <span className="text-[#d4af37]">Feed</span>
        </h2>
        <div className="bg-[#1a1a1a] rounded-xl border border-[#444444] p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300 fade-in fade-in-delay-${index + 1}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-[#d4af37] text-sm">{activity.track}</p>
                  </div>
                </div>
                <span className="text-[#cccccc] text-xs">{activity.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300"
            >
              View all activity
              <Play size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
