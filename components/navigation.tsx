"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Music2 } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/artists", label: "Artists" },
    { href: "/music", label: "Music" },
    { href: "/vision", label: "Vision" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-[#d4af37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2 font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-[#d4af37] hover:text-[#6a4c93] transition-all duration-300"
          >
            <Music2 className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative">
              8C RECORDS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#6a4c93] group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#cccccc] hover:text-[#d4af37] px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#6a4c93] transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-10 rounded transition-opacity duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-[#cccccc] hover:text-[#d4af37] transition-all duration-300 p-2 rounded-lg hover:bg-[#d4af37]/10 active:scale-95"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced */}
      <div
        className={`md:hidden fixed inset-0 top-16 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-[#d4af37]/20 shadow-2xl transition-all duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-4 pt-6 pb-8 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group block px-5 py-4 text-base font-medium transition-all duration-300 rounded-xl relative overflow-hidden ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms"
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-[#6a4c93]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] to-[#6a4c93] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div className="relative flex items-center justify-between">
                  <span className="text-[#cccccc] group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="text-[#d4af37] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="px-4 pb-6 pt-4 border-t border-[#444444]/30">
            <p className="text-center text-[#cccccc] text-sm">
              <span className="text-[#d4af37] font-orbitron font-bold">8C RECORDS</span>
              <br />
              <span className="text-xs opacity-70">NO EGO WHEN WE GO</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
