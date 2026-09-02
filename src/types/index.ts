// ==========================================
// Portfolio Types - 2026
// ==========================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  category: ProjectCategory;
  metrics?: ProjectMetric[];
}

export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "mobile"
  | "ai-ml"
  | "devops"
  | "open-source";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
  icon?: string;
  color?: string;
  yearsOfExp?: number;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"
  | "languages"
  | "ai-ml";

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  tech: string[];
  logo?: string;
  location?: string;
  type: "full-time" | "part-time" | "freelance" | "internship";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  current?: boolean;
  gpa?: string;
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  available: boolean;
  avatar?: string;
  socials: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  slug: string;
  published: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Framer Motion Types
export interface AnimationVariant {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}

// Three.js / WebGL
export interface ThreeSceneProps {
  className?: string;
  interactive?: boolean;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
