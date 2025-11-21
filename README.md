# 8C RECORDS

> **NO EGO WHEN WE GO**

A modern, high-performance web platform for 8C Records — an independent music label pushing the boundaries of India's underground music scene.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev/)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages & Routes](#pages--routes)
- [Design System](#design-system)
- [Performance & Optimization](#performance--optimization)
- [Accessibility](#accessibility)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

**8C Records** is a rising powerhouse in India's independent music scene, known for raw, boundary-pushing artistry. This web application serves as the digital home for the label, showcasing its artists, music catalog, and creative vision.

### The Label

Spearheaded by **8C Tony**, **8C Sam**, and **Adipetti**, 8C Records champions genre-bending artists specializing in:
- Hip-hop
- Drill
- Experimental sounds

The label's aesthetic blends streetwise culture with bold visuals — think wolf imagery, urban fashion (Nike sneakers), and luxury aesthetics (diamond jewelry) — creating a unique identity that represents bcity and southside India.

### Project Purpose

This website provides:
- **Artist Discovery**: Detailed profiles with integrated Spotify and Instagram links
- **Music Showcase**: Filterable catalog with embedded streaming
- **Brand Storytelling**: Immersive presentation of the label's vision and journey
- **Fan Engagement**: Direct contact channels and social media integration

Built by [Bharath](https://github.com/8harath), this platform demonstrates modern web development practices while serving the creative needs of an emerging independent label.

---

## ✨ Features

### Core Functionality

#### 🎵 Music Showcase
- **Interactive catalog** with filterable releases (by year, artist, genre)
- **Spotify integration** with embedded players
- Visual-first design with cover art and metadata
- Real-time "Now Playing" section

#### 👥 Artist Profiles
- Dedicated pages for each artist with biography and role
- **Direct social links** (Spotify, Instagram)
- Responsive card layouts with hover animations
- Visual storytelling through imagery

#### 📞 Contact & Engagement
- Client-side **contact form** with validation
- Multiple inquiry categories (General, Collaboration, Booking, Press)
- Social media aggregation
- Email integration (8c.records@gmail.com)

#### 🎨 Visual Experience
- **Animated hero section** with interactive music player UI
- Particle effects and sound wave visualizations
- Smooth page transitions and micro-interactions
- Mobile-responsive design throughout

### Technical Features

- **Server-Side Rendering (SSR)** for improved SEO and performance
- **Type-safe development** with TypeScript
- **Component library** integration (shadcn/ui + Radix UI)
- **Responsive navigation** with mobile menu
- **Custom animations** and CSS effects
- **Optimized fonts** with Next.js font optimization
- **Accessibility considerations** (reduced motion support, ARIA labels)

---

## 🛠 Technology Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 18.3](https://react.dev/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### Typography
- **[Google Fonts](https://fonts.google.com/)**: Inter (body), Orbitron (headings), Cinzel (accent)

### Form Management
- **[React Hook Form](https://react-hook-form.com/)** - Performant form validation
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Integration layer

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[class-variance-authority](https://cva.style/)** - CSS utility management
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Class name utilities

---

## 📁 Project Structure

```
8c/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts and navigation
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles and animations
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── artists/
│   │   └── page.tsx              # Artist showcase
│   ├── music/
│   │   └── page.tsx              # Music catalog
│   ├── vision/
│   │   └── page.tsx              # Vision and timeline
│   └── contact/
│       └── page.tsx              # Contact form
│
├── components/                   # React components
│   ├── hero.tsx                  # Animated hero section
│   ├── navigation.tsx            # Header navigation
│   ├── quick-links.tsx           # Homepage featured content
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── [35+ more components]
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper utilities
│
├── hooks/                        # Custom React hooks
│
├── public/                       # Static assets
│   └── placeholder.svg           # Placeholder images
│
├── styles/                       # Additional stylesheets
│   └── globals.css
│
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── components.json               # shadcn/ui configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **[Node.js](https://nodejs.org/)** (v18.17 or higher recommended)
- **npm** (v9+), **yarn** (v1.22+), or **pnpm** (v8+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/8harath/8c.git
   cd 8c
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm run start
```

The build output will be in the `.next` directory.

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 🗺 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `app/page.tsx` | Homepage with hero section and quick links |
| `/about` | `app/about/page.tsx` | Label introduction and creative approach |
| `/artists` | `app/artists/page.tsx` | Artist profiles with social integration |
| `/music` | `app/music/page.tsx` | Music catalog with filters and Spotify embeds |
| `/vision` | `app/vision/page.tsx` | Label vision, timeline, and journey |
| `/contact` | `app/contact/page.tsx` | Contact form and social links |

### Page Details

#### Home (`/`)
- **Hero Section**: Animated background with particles, music notes, and sound waves
- **Mini Music Player**: Interactive UI (client-side only, no actual playback)
- **Quick Links**: Featured releases, artist spotlights, stats dashboard
- **Activity Feed**: Recent label activity

#### About (`/about`)
- Label introduction and background
- Creative methodology (Experimental Sound Design, Visual Synthesis, Collaborative Process)
- Responsive image gallery

#### Artists (`/artists`)
- **3 Artist Profiles**: 8C Tony, 8C Sam, Adipetti
- Social links (Spotify, Instagram)
- Role descriptions and bios
- Interactive card design with hover effects

#### Music (`/music`)
- Filterable release grid (by year, artist)
- Release metadata (date, genre)
- Placeholder releases (Echoes of Glass, Neon Monk, Fade Into Stillness)
- Embedded Spotify player

#### Vision (`/vision`)
- Label manifesto and philosophy
- Timeline of milestones (2019-2025)
- Visual journey representation

#### Contact (`/contact`)
- **Client-side form** with 4 inquiry types
- Form validation (name, email, subject, message)
- Social media links (Spotify, Instagram per artist)
- Email: 8c.records@gmail.com

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-bg: #0a0a0a        /* Deep black background */
--secondary-bg: #1a1a1a      /* Elevated surfaces */
--card-bg: #2a2a2a           /* Card backgrounds */

/* Text Colors */
--primary-text: #ffffff       /* Primary text */
--secondary-text: #cccccc     /* Secondary text */

/* Accent Colors */
--accent-gold: #d4af37        /* Primary brand color (gold) */
--accent-purple: #6a4c93      /* Secondary accent (purple) */

/* UI Elements */
--hover-gray: #3a3a3a
--border-gray: #444444
```

### Typography

| Font | Use Case | Weights |
|------|----------|---------|
| **Orbitron** | Headlines, brand text | 400, 700, 900 |
| **Inter** | Body text, UI elements | Variable |
| **Cinzel** | Accent text, quotes | 400, 600 |

### Spacing & Layout

- **Container Max Width**: 7xl (1280px)
- **Padding**: Responsive (px-4 sm:px-6 lg:px-8)
- **Border Radius**:
  - Small cards: `rounded-lg` (0.5rem)
  - Large cards: `rounded-xl` (0.75rem) to `rounded-2xl` (1rem)
  - Buttons: `rounded-full`

### Animation System

Custom animations defined in `app/globals.css`:

| Animation | Duration | Use Case |
|-----------|----------|----------|
| `fadeInUp` | 1s | Content reveal on scroll |
| `gradientShift` | 20s | Background gradients |
| `floatSlow` | 20s | Floating particles |
| `floatDiagonal` | 15s | Diagonal floating motion |
| `soundWavePulse` | 1.5s | Audio visualizer bars |
| `twinkle` | 3s | Sparkle effects |
| `textGlowPulse` | 4s | Glowing text effect |

---

## ⚡ Performance & Optimization

### Next.js Optimizations

1. **Image Optimization**: Using `next/image` for automatic WebP conversion and lazy loading
2. **Font Optimization**: Google Fonts preloaded with `next/font`
3. **Code Splitting**: Automatic route-based code splitting
4. **Server Components**: Default server-side rendering for static content

### CSS Optimizations

- **Tailwind CSS**: Automatic purging of unused styles in production
- **PostCSS**: Minification and autoprefixing
- **CSS Custom Properties**: For dynamic theming

### Bundle Size Considerations

- **Component Library**: Tree-shakeable Radix UI primitives
- **Icon Library**: Lucide React (only imported icons are bundled)
- **Conditional Imports**: Client components marked with `"use client"`

### Performance Metrics (Estimated)

| Metric | Target | Notes |
|--------|--------|-------|
| First Contentful Paint | <1.5s | Hero section visible |
| Largest Contentful Paint | <2.5s | Main content loaded |
| Time to Interactive | <3.5s | Full interactivity |
| Cumulative Layout Shift | <0.1 | Minimal layout shifts |

---

## ♿ Accessibility

### Implemented Features

1. **Semantic HTML**: Proper use of `<main>`, `<section>`, `<nav>`, `<header>`
2. **ARIA Labels**: Interactive elements labeled for screen readers
3. **Keyboard Navigation**: All interactive elements accessible via keyboard
4. **Focus States**: Visible focus indicators on all focusable elements
5. **Color Contrast**: WCAG AA compliant text contrast ratios

### Responsive Design

- **Mobile-First**: Breakpoints at sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Targets**: Minimum 44px for mobile interaction
- **Viewport Meta**: Proper scaling on all devices

### Motion & Animation

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations reduced to 0.01ms for users with motion sensitivity */
}
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  /* Enhanced text and border colors for better visibility */
}
```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

### Environment Setup

No environment variables are required for basic functionality. For production deployment with analytics or API integrations, create a `.env.local` file:

```bash
# Example (not currently used in the application)
# NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add `page.tsx` with your component
3. Navigation will automatically include the new route

Example:
```tsx
// app/events/page.tsx
export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      {/* Your content */}
    </main>
  )
}
```

### Component Development

The project uses shadcn/ui for component scaffolding. To add a new component:

```bash
npx shadcn-ui@latest add [component-name]
```

This will:
1. Install necessary dependencies
2. Add the component to `components/ui/`
3. Configure Tailwind classes

---

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure build settings (auto-detected)
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/8harath/8c)

### Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next directory
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Configuration

Ensure the following for production:
- Set `NODE_ENV=production`
- Configure proper domain in Next.js config
- Enable compression and caching headers
- Set up CDN for static assets

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Coding Standards

- Follow existing code style (TypeScript, Prettier, ESLint)
- Write meaningful commit messages
- Test on multiple screen sizes
- Ensure accessibility compliance
- Update documentation as needed

### Reporting Issues

Found a bug? Have a suggestion? [Open an issue](https://github.com/8harath/8c/issues) with:
- Clear description
- Steps to reproduce (if applicable)
- Expected vs. actual behavior
- Screenshots (if relevant)

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**8C Records**
- Email: [8c.records@gmail.com](mailto:8c.records@gmail.com)
- Website: [https://8harath.me](https://8harath.me)

**Artists**
- **8C Tony**: [Spotify](https://open.spotify.com/artist/4dgvjJXnVc0LsMcPxJ1G2l) | [Instagram](https://www.instagram.com/8c.tony)
- **8C Sam**: [Instagram](https://www.instagram.com/8c_sam)
- **Adipetti**: [Spotify](https://open.spotify.com/artist/3xc0HXO4HGJI3KVD0bI8ZR) | [Instagram](https://www.instagram.com/adipetti)

**Developer**
- **Bharath**: [GitHub](https://github.com/8harath) | [Website](https://8harath.me)

---

## 🙏 Acknowledgments

- **Next.js Team** - For the incredible React framework
- **Vercel** - For hosting and v0.dev tooling
- **shadcn** - For the component library architecture
- **Radix UI** - For accessible component primitives
- **The Artists** - 8C Tony, 8C Sam, Adipetti - For the creative vision

---

<div align="center">

**NO EGO WHEN WE GO**

Made with 🎵 by [Bharath](https://github.com/8harath) for 8C Records

[Report Bug](https://github.com/8harath/8c/issues) · [Request Feature](https://github.com/8harath/8c/issues) · [Documentation](https://github.com/8harath/8c#readme)

</div>
