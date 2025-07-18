"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Clock, Instagram, Twitter, Youtube, Music } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    { name: "Spotify (8C Tony)", icon: <Music size={20} />, url: "https://open.spotify.com/artist/4dgvjJXnVc0LsMcPxJ1G2l?si=8Q6W02hnQoaeBw4lYG-71g" },
    { name: "Spotify (Adipetti)", icon: <Music size={20} />, url: "https://open.spotify.com/artist/3xc0HXO4HGJI3KVD0bI8ZR?si=GcU2HCQLQtCNHOmRy_NzLQ" },
    { name: "Spotify (Track)", icon: <Music size={20} />, url: "https://open.spotify.com/track/1cWkNAI04ZAmHeSIGfXRsW?si=hEYmE1J8TTq-dvy_s4Yn8w" },
    { name: "Instagram (8C Tony)", icon: <Instagram size={20} />, url: "https://www.instagram.com/8c.tony?igsh=MTdvdXJwa2thbWMwbA==" },
    { name: "Instagram (Adipetti)", icon: <Instagram size={20} />, url: "https://www.instagram.com/adipetti?igsh=c3dodXE2YWFrdWpz" },
    { name: "Instagram (8C Sam)", icon: <Instagram size={20} />, url: "https://www.instagram.com/8c_sam?igsh=NXFic2E2ejN4YWcy" },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-center text-[#d4af37] mb-16">Get In Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#444444]">
            <h2 className="font-orbitron font-bold text-2xl text-white mb-6">Start a Conversation</h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-[#d4af37] text-6xl mb-4">✓</div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">Message Sent!</h3>
                <p className="text-[#cccccc]">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444444] rounded-lg text-white placeholder-[#cccccc] focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444444] rounded-lg text-white placeholder-[#cccccc] focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444444] rounded-lg text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Collaboration Request">Collaboration Request</option>
                    <option value="Booking/Events">Booking/Events</option>
                    <option value="Press/Media">Press/Media</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444444] rounded-lg text-white placeholder-[#cccccc] focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4af37] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#6a4c93] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#444444]">
              <h2 className="font-orbitron font-bold text-2xl text-white mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-[#d4af37]" size={20} />
                  <span className="text-[#cccccc]">8c.records@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="text-[#d4af37]" size={20} />
                  <span className="text-[#cccccc]">Open to collaboration 24/7</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#444444]">
              <h2 className="font-orbitron font-bold text-2xl text-white mb-6">Follow & Listen</h2>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center gap-3 p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] hover:text-[#d4af37] transition-all duration-300 group"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Artist Contact */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#444444] mt-8">
              <h2 className="font-orbitron font-bold text-2xl text-white mb-6">Direct Artist Links</h2>
              <ul className="space-y-2 text-[#cccccc] text-sm">
                <li><b>8C Tony</b>: <a href="https://open.spotify.com/artist/4dgvjJXnVc0LsMcPxJ1G2l?si=8Q6W02hnQoaeBw4lYG-71g" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline">Spotify</a> | <a href="https://www.instagram.com/8c.tony?igsh=MTdvdXJwa2thbWMwbA==" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline">Instagram</a></li>
                <li><b>Adipetti</b>: <a href="https://open.spotify.com/artist/3xc0HXO4HGJI3KVD0bI8ZR?si=GcU2HCQLQtCNHOmRy_NzLQ" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline">Spotify</a> | <a href="https://www.instagram.com/adipetti?igsh=c3dodXE2YWFrdWpz" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline">Instagram</a></li>
                <li><b>8C Sam</b>: <span className="text-[#cccccc]">Spotify: yet to come</span> | <a href="https://www.instagram.com/8c_sam?igsh=NXFic2E2ejN4YWcy" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
