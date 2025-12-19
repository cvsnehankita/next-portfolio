# Sneha Ramteke - Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

## Features

- 🌓 **Dark/Light Mode** - Smooth theme switching with system preference detection
- 🎨 **Modern Design** - Clean, professional aesthetic with code-inspired elements
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Static generation for optimal loading
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and Twitter cards

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: JetBrains Mono + Inter

## Sections

1. **Hero** - Introduction with animated code-style typography
2. **About** - Background story and key highlights
3. **Experience** - Timeline of professional roles at CitiBank, Yash Technologies, and Vyom Labs
4. **Skills** - Organized by category (Languages, Backend, Frontend, Cloud, DevOps, etc.)
5. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
# Navigate to project folder
cd sneha-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Update the following files with Sneha's actual information:

1. **`src/components/Hero.tsx`** - Update name, tagline, and social links
2. **`src/components/About.tsx`** - Modify the about text and stats
3. **`src/components/Experience.tsx`** - Already populated with resume data
4. **`src/components/Contact.tsx`** - Update email, LinkedIn, GitHub URLs
5. **`src/app/layout.tsx`** - Update metadata (title, description, keywords)

### Styling

- **Colors**: Edit the `@theme` block in `src/app/globals.css`
- **Primary color**: Currently teal (#14b8a6)
- **Dark theme**: Slate palette

### Adding Resume PDF

Place `resume.pdf` in the `/public` folder for the resume download button to work.

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

Build and deploy the `.next` folder or use static export:

```bash
npm run build
# Deploy the .next folder or public folder for static hosting
```

## Project Structure

```
sneha-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind 4 theme & custom styles
│   │   ├── layout.tsx       # Root layout with ThemeProvider
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation with theme toggle
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Experience.tsx   # Timeline experience
│   │   ├── Skills.tsx       # Skills grid
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer
│   │   └── index.ts         # Barrel exports
│   └── context/
│       └── ThemeContext.tsx # Dark/Light mode provider
├── public/                  # Static assets
└── package.json
```

## License

MIT

---

Built with ❤️ for Sneha Ramteke
