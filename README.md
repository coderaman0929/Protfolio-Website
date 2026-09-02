# 🚀 Aman Soni — Full Stack Developer Portfolio 2026

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

**A world-class, production-grade developer portfolio built with Next.js 15, Three.js WebGL, Framer Motion, and Google Gemini AI.**

[🌐 Live Demo](http://localhost:3000) · [📧 Contact](mailto:soniaman0018@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/amansoni0929) · [🐙 GitHub](https://github.com/coderaman0929)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **3D WebGL Hero** | Interactive Three.js particle canvas with DPR capping & resource disposal |
| 🤖 **AI Chat Assistant** | Gemini API-powered chatbot with smart fallback — answers visitors about projects, resume, skills, and contact |
| 🎨 **Framer Motion Animations** | Smooth scroll-triggered enter/exit animations across all sections |
| 🌙 **Dark / Light Theme** | Persistent theme toggle via next-themes |
| 📱 **Fully Responsive** | Mobile-first design — pixel-perfect on all screen sizes |
| ♿ **Accessible (a11y)** | ARIA labels, semantic HTML, keyboard-navigable, focus states |
| 📬 **Contact Form** | Validated contact form with server action API |
| 🐳 **Dockerized** | Multi-stage Docker build, non-root user, health-check endpoint |
| ✅ **Fully Tested** | 12 unit + component tests (Vitest + RTL), E2E + a11y (Playwright + axe) |
| 🔒 **Security Headers** | CSP, X-Frame-Options, HSTS via next.config.ts |
| 🗺️ **SEO Ready** | Auto-generated sitemap.xml & robots.txt, Open Graph metadata |
| ⚡ **Performance** | Standalone build output, image optimization via sharp |

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router, RSC, Standalone output)
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 3.4**
- **Framer Motion** — animations & scroll triggers
- **Three.js / @react-three/fiber / @react-three/drei** — 3D WebGL canvas
- **Lucide React** — icon library
- **Lenis** — smooth scrolling

### Backend / API
- **Next.js Route Handlers** (/api/chat, /api/contact, /api/health)
- **Google Gemini API** (gemini-1.5-flash) — AI chat assistant
- **JWT-ready** architecture

### DevOps & Testing
- **Docker** (multi-stage build, non-root UID 1001)
- **GitHub Actions** CI pipeline
- **Vitest + React Testing Library** — unit & component tests
- **Playwright + axe-core** — E2E & accessibility tests

---

## 📁 Project Structure

`
portfolio-2026-aman-soni/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/         # Gemini AI chatbot route
│   │   │   ├── contact/      # Contact form route
│   │   │   └── health/       # Docker health-check route
│   │   ├── layout.tsx        # Root layout & metadata
│   │   └── page.tsx          # Main page (all sections)
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroCanvas.tsx        # Three.js WebGL particle hero
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Chatbot.tsx           # Floating AI chatbot widget
│   │       └── ThemeToggle.tsx
│   ├── lib/
│   │   ├── data.ts           # All portfolio data
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── profile.jpg
│   └── Aman_Soni_Fullstack_Resume.pdf
├── tests/
│   ├── unit/
│   ├── component/
│   └── e2e/
├── .github/workflows/ci.yml
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── next.config.ts
└── README.md
`

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** >= 18.x
- **npm** >= 9.x
- (Optional) **Docker**

### 1. Clone the Repository
`ash
git clone https://github.com/coderaman0929/portfolio.git
cd portfolio-2026-aman-soni
`

### 2. Install Dependencies
`ash
npm install
`

### 3. Set Up Environment Variables
`ash
cp .env.example .env.local
`

Edit .env.local:
`env
GEMINI_API_KEY=your_google_gemini_api_key_here
`

> **Note:** The AI chatbot works without a Gemini API key via a built-in smart fallback engine.

### 4. Run Development Server
`ash
npm run dev
`

Open http://localhost:3000 in your browser.

---

## 🔑 Environment Variables

`env
# Google Gemini API (get key at: https://aistudio.google.com/app/apikey)
GEMINI_API_KEY=your_gemini_api_key_here
`

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| npm run dev | Start development server |
| npm run build | Create production build |
| npm run start | Start production server |
| npm run type-check | TypeScript type checking |
| npm run lint | Run ESLint |
| npm run test | Run unit & component tests |
| npm run test:watch | Tests in watch mode |
| npm run test:e2e | Playwright E2E tests |
| npm run test:a11y | Accessibility tests |

---

## ✅ Testing

### Unit & Component Tests
`ash
npm run test
`
Expected: 3 test files, 12 tests — all pass.

### E2E & Accessibility Tests
`ash
npx playwright install   # first time only
npm run test:e2e
npm run test:a11y
`

---

## 🐳 Docker Deployment

### Docker Compose (Recommended)
`ash
docker-compose up --build
`

App at http://localhost:3000

### Manual Docker
`ash
docker build -t portfolio-2026 .
docker run -p 3000:3000 -e GEMINI_API_KEY=your_key --name portfolio portfolio-2026
`

### Health Check
`ash
curl http://localhost:3000/api/health
# { "status": "ok", "timestamp": "..." }
`

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at vercel.com
3. Add GEMINI_API_KEY to Environment Variables
4. Deploy ✅

### Self-Hosted
`ash
npm run build
npm run start
`

---

## 🔒 Security
- Content Security Policy (CSP) headers
- X-Frame-Options: DENY — clickjacking protection
- X-Content-Type-Options: nosniff
- Docker runs as non-root user (UID 1001)
- Input validation on all API routes

---

## 📋 Featured Projects

### 1. AI-Powered Developer Portfolio 2026
This portfolio — Next.js 15, Three.js, Framer Motion, Gemini API.

### 2. Visionora — ATS Resume Builder
AI-powered resume builder with ATS analysis and live PDF export.
Tech: Next.js 15, Node.js, Express.js, MongoDB, Google Gemini API

### 3. Logistics & Delivery Management Platform
Enterprise logistics platform with real-time tracking and multi-role auth.
Tech: React.js, Next.js, Node.js, Express.js, MongoDB, SQL Server

---

## 👨‍💻 About

**Aman Soni** — Full Stack Developer, Gwalior, India 🇮🇳

- 🎓 BCA Graduate — Vikrant University (2023–2026, 7.9 CGPA)
- 🎓 MCA Pursuing — Vikrant University (Aug 2026–2028)
- 📫 soniaman0018@gmail.com
- 🔗 linkedin.com/in/amansoni0929
- 🐙 github.com/coderaman0929

---

## 📄 License

MIT License — open source and free to use.

---

<div align="center">

**Built with ❤️ by Aman Soni**

⭐ Star this repo if you found it helpful!

</div>
