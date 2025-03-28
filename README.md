# Portfolio - Mehedi Hasan

A modern, performance-optimized portfolio website built with Next.js and Tailwind CSS, designed to showcase a web developer's work and skills with a seamless user experience.

[![GitHub stars](https://img.shields.io/github/stars/asma019/NodeJs-Portfolio-Mehedi-Hasan?style=social)](https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan/stargazers) [![Latest Release](https://img.shields.io/github/v/release/asma019/NodeJs-Portfolio-Mehedi-Hasan?style=flat-square)](https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan/releases/tag/v)

![Portfolio Preview](/public/images/socialshare.png)

⭐ **If you find this project helpful, please consider giving it a star on GitHub!** ⭐

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Development](#development)
- [Deployment](#deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [Self-Hosted Deployment](#self-hosted-deployment)
  - [PM2 Deployment](#pm2-deployment)
- [Performance Optimizations](#performance-optimizations)
- [SEO Features](#seo-features)
- [Project Structure](#project-structure)
- [Customizing Content](#customizing-content)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern UI Design**: Clean and professional interface with smooth animations
- **Responsive Layout**: Perfect viewing experience on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme switcher with system preference detection
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Functional Contact Form**: SMTP email integration
- **Progressive Web App (PWA)**: Installable on mobile devices
- **Accessibility**: WCAG compliant for better user experience
- **Typescript**: Type-safe code for better development experience
- **Modular Components**: Easy to maintain and update

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **SEO**: Built-in Next.js metadata API
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan.git
   cd NodeJs-Portfolio-Mehedi-Hasan
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
# SMTP Configuration for Contact Form
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
MAIL_FROM=your-email@example.com

# Site Configuration
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

For production, set these environment variables in your hosting platform.

## 💻 Development

- **Run development server with hot-reload**:
  ```bash
  npm run dev
  ```

- **Lint code**:
  ```bash
  npm run lint
  ```

- **Analyze bundle size**:
  ```bash
  npm run analyze
  ```

- **Generate PWA icons from your logo**:
  ```bash
  npm run generate-icons
  ```

## 🌐 Deployment

### Vercel Deployment

This project is optimized for [Vercel](https://vercel.com/), which offers the simplest deployment experience.

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the following environment variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `MAIL_FROM`
   - `NEXT_PUBLIC_BASE_URL`
4. Deploy

The project includes `vercel.json` with optimized cache settings and build configurations.

### Self-Hosted Deployment

To deploy on your own server:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

3. For containerized deployment, use the provided `Dockerfile`:
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

4. For a reverse proxy setup (Nginx example):
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

### PM2 Deployment

For reliable production deployment on your own server using PM2:

1. Install PM2 globally if you haven't already:
   ```bash
   npm install -g pm2
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Create a PM2 configuration file `ecosystem.config.js`:
   ```javascript
   module.exports = {
     apps: [
       {
         name: 'portfolio',
         script: 'node_modules/next/dist/bin/next',
         args: 'start',
         instances: 'max',
         exec_mode: 'cluster',
         autorestart: true,
         watch: false,
         max_memory_restart: '1G',
         env: {
           NODE_ENV: 'production',
           PORT: 3000
         }
       }
     ]
   };
   ```

4. Start your application with PM2:
   ```bash
   pm2 start ecosystem.config.js
   ```

5. Set up PM2 to start on system boot:
   ```bash
   pm2 startup
   pm2 save
   ```

6. Monitor your application:
   ```bash
   pm2 monit
   ```

## ⚡ Performance Optimizations

This portfolio includes numerous performance optimizations:

- **Image Optimization**: Auto WebP/AVIF conversion, lazy loading, blur placeholders
- **Font Optimization**: System font fallbacks, font display swap, preloading
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind purging, experimental optimizeCss with Critters for critical CSS extraction
- **Caching Strategies**: Advanced caching headers for static assets
- **PWA Optimization**: Complete set of properly sized icons for various devices and screen sizes
- **Bundle Analysis**: Webpack bundle analysis for optimization opportunities
- **Tree Shaking**: Removal of unused code
- **Package Optimization**: optimizePackageImports for large libraries
- **Console Removal**: Production builds have console logs removed

## 🔍 SEO Features

- **Metadata API**: Comprehensive SEO metadata using Next.js Metadata API
- **Sitemap**: Automatic sitemap generation with `next-sitemap`
- **Robots.txt**: Custom robots.txt configuration
- **Structured Data**: JSON-LD implementation for rich snippets
- **Social Media**: Open Graph and Twitter Card metadata
- **Canonical URLs**: Prevents duplicate content issues
- **Mobile Friendly**: Responsive design, verified with Google Mobile-Friendly Test

## 📁 Project Structure

```
portfolio/
├── app/                  # Next.js App Router
│   ├── api/              # API routes (contact form handler)
│   ├── components/       # Reusable UI components
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── test-og/          # OG image testing page
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── icons/            # App icons for PWA
│   ├── images/           # Images used in the site
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # Robots configuration
│   └── sitemap.xml       # XML sitemap
├── scripts/              # Utility scripts
│   └── generate-icons.js # Icon generation script
├── .env.local            # Local environment variables
├── next.config.js        # Next.js configuration
├── vercel.json           # Vercel-specific configuration
├── next-sitemap.config.js # Sitemap generator config
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Customizing Content

### Personal Information

Edit your personal information in the following files:

- **Contact Information**: `app/sections/Contact.tsx`
- **About Me**: `app/sections/About.tsx`
- **Work Experience**: `app/sections/Experience.tsx`
- **Projects**: `app/sections/Projects.tsx`
- **Testimonials**: `app/sections/Testimonials.tsx`
- **Skills**: `app/sections/About.tsx` (skills array)

### Theme Customization

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Typography**: Modify font settings in `app/layout.tsx`
3. **Dark Mode**: Dark mode styling is controlled by `dark:` prefixed classes

### Adding New Sections

1. Create a new component in `app/sections/`
2. Import and add it to `app/page.tsx`
3. Add a navigation link in `app/components/Navbar.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📦 Latest Release

Check out the [latest release](https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan/releases/tag/v) for the most up-to-date version.

### Recent Updates
- Fixed CSS optimization with the addition of the Critters package
- Updated `next.config.js` for better performance and compatibility
- Added complete set of PWA icons for all required sizes
- Fixed cross-origin issues by updating `allowedDevOrigins` setting
- Ensured compatibility with Next.js 15.2.4

---

⭐ **If you find this project useful, please consider [giving it a star on GitHub](https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan)!** ⭐

Built with ❤️ by [Mehedi Hasan](https://github.com/asma019)
