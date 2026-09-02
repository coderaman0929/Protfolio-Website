import type {
  PersonalInfo,
  Project,
  Skill,
  Education,
  NavItem,
} from "@/types";

// ==========================================
// PERSONAL INFO
// ==========================================
export const personalInfo: PersonalInfo = {
  name: "Aman Soni",
  title: "Full Stack Developer",
  tagline: "Engineering scalable full-stack web applications and modern digital solutions.",
  bio: "Full Stack Developer specializing in React.js, Next.js 15, TypeScript, Node.js, and Express.js, with hands-on experience building scalable, responsive, and high-performance web applications. Proficient in REST API development, secure JWT authentication, real-time communication, MongoDB, SQL Server, PostgreSQL, and modern UI technologies. Experienced in integrating AI-powered capabilities with the Google Gemini API and deploying production-ready applications using modern development tools. Currently pursuing an MCA and seeking opportunities to contribute to innovative products while continuously growing as a software engineer.",
  location: "Gwalior, India 🇮🇳",
  email: "soniaman0018@gmail.com",
  available: true,
  avatar: "/profile.jpg",
  socials: [
    { platform: "GitHub", url: "https://github.com/coderaman0929", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/amansoni0929", icon: "linkedin" },
  ],
};

// ==========================================
// NAVIGATION
// ==========================================
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// PROJECTS (3 Featured Full-Stack Projects)
// ==========================================
export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Developer Portfolio 2026",
    description:
      "A modern, high-performance developer portfolio featuring an interactive 3D WebGL hero section and an AI-powered chat assistant built with Next.js 15, TypeScript, and the Google Gemini API.",
    longDescription:
      "Engineered an Awwwards-grade developer portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features an interactive 3D WebGL hero canvas built with Three.js, full accessibility compliance, multi-stage Docker containerization, and an integrated Gemini AI Assistant that answers visitor questions about projects, skills, education, and resume details in real time.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Google Gemini API"],
    githubUrl: "https://github.com/coderaman0929/portfolio",
    featured: true,
    year: 2026,
    category: "fullstack",
    metrics: [
      { label: "AI Assistant", value: "Gemini API" },
      { label: "3D Engine", value: "Three.js WebGL" },
    ],
  },
  {
    id: "2",
    title: "Visionora — ATS Resume Builder",
    description:
      "An AI-powered resume builder and ATS analyzer that enables users to construct professional resumes via customizable templates, live editing, and instant PDF export.",
    longDescription:
      "Developed Visionora, an AI-powered resume builder and ATS analyzer that enables job seekers to build resume profiles optimized for Application Tracking Systems. Integrated Google Gemini API to analyze resume content against job descriptions, generate professional summaries, suggest keyword optimizations, and export pixel-perfect PDFs.",
    tech: ["Next.js 15", "TypeScript", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "PDF Generation"],
    githubUrl: "https://github.com/coderaman0929/visionora",
    featured: true,
    year: 2026,
    category: "fullstack",
    metrics: [
      { label: "AI Analysis", value: "ATS Optimizer" },
      { label: "Export", value: "Live PDF" },
    ],
  },
  {
    id: "3",
    title: "Logistics & Delivery Management Platform",
    description:
      "A comprehensive enterprise full-stack logistics and delivery platform with real-time tracking, route optimization, automated dispatching, and operations analytics.",
    longDescription:
      "Architected and built an end-to-end Logistics & Delivery Management Platform. Key capabilities include real-time shipment status tracking, automated driver order dispatching, interactive delivery route mapping, secure multi-role JWT authentication, and executive operations analytics dashboards.",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL Server", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/coderaman0929/logistics-delivery-platform",
    featured: true,
    year: 2026,
    category: "fullstack",
    metrics: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Databases", value: "MongoDB + SQL" },
    ],
  },
];

// ==========================================
// SKILLS (Full Stack Web Development Focus)
// ==========================================
export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "frontend", color: "#61DAFB", yearsOfExp: 2 },
  { name: "Next.js 15", level: 88, category: "frontend", color: "#000000", yearsOfExp: 2 },
  { name: "TypeScript", level: 85, category: "frontend", color: "#3178C6", yearsOfExp: 2 },
  { name: "Tailwind CSS", level: 90, category: "frontend", color: "#06B6D4", yearsOfExp: 2 },
  { name: "HTML5 & CSS3", level: 92, category: "frontend", color: "#E34F26", yearsOfExp: 3 },
  { name: "Framer Motion / Three.js", level: 78, category: "frontend", color: "#EF008F", yearsOfExp: 1 },

  // Backend
  { name: "Node.js", level: 85, category: "backend", color: "#68A063", yearsOfExp: 2 },
  { name: "Express.js", level: 84, category: "backend", color: "#000000", yearsOfExp: 2 },
  { name: "REST API Design", level: 88, category: "backend", color: "#FF5733", yearsOfExp: 2 },
  { name: "JWT Authentication", level: 82, category: "backend", color: "#D63AFF", yearsOfExp: 2 },
  { name: "Socket.IO", level: 75, category: "backend", color: "#010101", yearsOfExp: 1 },

  // Database
  { name: "MongoDB", level: 82, category: "database", color: "#47A248", yearsOfExp: 2 },
  { name: "SQL Server", level: 75, category: "database", color: "#CC2927", yearsOfExp: 2 },
  { name: "PostgreSQL", level: 70, category: "database", color: "#336791", yearsOfExp: 1 },
  { name: "Mongoose / Prisma", level: 80, category: "database", color: "#880000", yearsOfExp: 2 },

  // AI & Tools
  { name: "Google Gemini API", level: 88, category: "ai-ml", color: "#4285F4", yearsOfExp: 1 },
  { name: "Git / GitHub", level: 88, category: "devops", color: "#2088FF", yearsOfExp: 3 },
  { name: "Docker", level: 75, category: "devops", color: "#2496ED", yearsOfExp: 1 },
  { name: "Postman", level: 85, category: "devops", color: "#FF6C37", yearsOfExp: 2 },
];

// ==========================================
// EDUCATION (BCA Completed + MCA Pursuing)
// ==========================================
export const education: Education[] = [
  {
    id: "1",
    institution: "Vikrant University, Gwalior",
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science & Software Engineering",
    startYear: 2026,
    endYear: 2028,
    current: true,
    achievements: [
      "Commenced MCA degree in August 2026",
      "Specializing in Advanced Software Engineering, Cloud Architecture, and Enterprise System Design",
    ],
  },
  {
    id: "2",
    institution: "Vikrant University, Gwalior",
    degree: "Bachelor of Computer Application (BCA)",
    field: "Computer Applications",
    startYear: 2023,
    endYear: 2026,
    gpa: "7.9 CGPA",
    achievements: [
      "Successfully completed Bachelor of Computer Application degree (2023 - 2026)",
      "Specialized in Full Stack Web Development (React, Next.js, Node.js, Express, MongoDB, SQL Server)",
      "Engineered multiple full-stack web applications and AI integrations",
    ],
  },
];

// ==========================================
// STATS
// ==========================================
export const stats = [
  { label: "Featured Projects", value: "3" },
  { label: "Tech Stack", value: "Full Stack" },
  { label: "AI Integration", value: "Gemini API" },
  { label: "Qualification", value: "BCA / MCA" },
];