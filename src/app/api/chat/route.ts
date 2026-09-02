import { NextResponse } from "next/server";
import { personalInfo, projects, skills, education } from "@/lib/data";

const SYSTEM_CONTEXT = `
You are the AI Assistant for ${personalInfo.name}'s Portfolio website.
Answer visitor questions politely, accurately, and concisely based on the following portfolio information.

# PERSONAL INFORMATION
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- Availability: ${personalInfo.available ? "Available for full-stack projects and full-time roles" : "Currently busy"}
- Bio: ${personalInfo.bio}
- Resume Download Link: /Aman_Soni_Fullstack_Resume.pdf
- GitHub: https://github.com/coderaman0929
- LinkedIn: https://www.linkedin.com/in/amansoni0929

# EDUCATION
- MCA (Master of Computer Applications): Vikrant University, Gwalior (Started Aug 2026 - Present / 2028). Specializing in Advanced Software Engineering and Distributed Systems.
- BCA (Bachelor of Computer Application): Vikrant University, Gwalior (2023 - 2026, Completed with 7.9 CGPA). Specialized in Full Stack Web Development.

# FEATURED PROJECTS
${projects
  .map(
    (p, i) =>
      `${i + 1}. **${p.title}**: ${p.description}\n   - Tech Stack: ${p.tech.join(", ")}\n   - GitHub: ${p.githubUrl}`
  )
  .join("\n\n")}

# TECHNICAL SKILLS
${skills.map((s) => `- ${s.name} (${s.category})`).join("\n")}

Respond concisely in clean markdown format. If asked about resume, provide the direct download link /Aman_Soni_Fullstack_Resume.pdf.
`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If Gemini API Key is provided, call Gemini API
    if (apiKey) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${SYSTEM_CONTEXT}\n\nVisitor Question: ${message}` }],
              },
            ],
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const replyText =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I am Aman's AI assistant! Feel free to ask about his projects, skills, education, or download his resume.";
        return NextResponse.json({ reply: replyText });
      }
    }

    // Smart Fallback Engine (Answers all questions when API key is pending)
    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes("resume") || lower.includes("cv") || lower.includes("download")) {
      reply = `📄 You can download Aman's full resume directly here: [Download Resume](/Aman_Soni_Fullstack_Resume.pdf).\n\nAman is a Full Stack Developer proficient in React.js, Next.js 15, Node.js, Express, MongoDB, SQL Server, and TypeScript.`;
    } else if (lower.includes("project") || lower.includes("work") || lower.includes("visionora") || lower.includes("logistics")) {
      reply = `🚀 **Aman's Key Projects:**\n\n` +
        `1. **AI-Powered Developer Portfolio 2026** (Next.js 15, Three.js WebGL, Gemini API)\n` +
        `2. **Visionora — ATS Resume Builder** (Next.js 15, Express, MongoDB, Gemini API, PDF Export)\n` +
        `3. **Logistics & Delivery Management Platform** (React, Next.js, Node.js, Express, MongoDB, SQL Server)\n\n` +
        `Ask me about any specific project for details!`;
    } else if (lower.includes("education") || lower.includes("degree") || lower.includes("bca") || lower.includes("mca") || lower.includes("college")) {
      reply = `🎓 **Education Details:**\n\n` +
        `- **MCA (Master of Computer Applications)**: Vikrant University, Gwalior (Started August 2026 – Present)\n` +
        `- **BCA (Bachelor of Computer Application)**: Vikrant University, Gwalior (2023 – 2026, Completed with 7.9 CGPA)`;
    } else if (lower.includes("skill") || lower.includes("stack") || lower.includes("react") || lower.includes("node") || lower.includes("next")) {
      reply = `🛠️ **Technical Skills:**\n\n` +
        `- **Frontend:** React.js, Next.js 15, TypeScript, Tailwind CSS, Three.js, Framer Motion\n` +
        `- **Backend:** Node.js, Express.js, REST APIs, JWT Auth, Socket.IO\n` +
        `- **Databases:** MongoDB, SQL Server, PostgreSQL, Mongoose\n` +
        `- **AI & DevOps:** Google Gemini API, Docker, Git/GitHub, Postman`;
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach") || lower.includes("linkedin")) {
      reply = `📬 **Contact Aman Soni:**\n\n` +
        `- **Email:** [soniaman0018@gmail.com](mailto:soniaman0018@gmail.com)\n` +
        `- **GitHub:** [coderaman0929](https://github.com/coderaman0929)\n` +
        `- **LinkedIn:** [amansoni0929](https://www.linkedin.com/in/amansoni0929)\n\n` +
        `Aman is currently available for Full Stack Web Development projects!`;
    } else {
      reply = `Hi! I'm Aman's AI Portfolio Assistant. 🤖\n\n` +
        `I can help you with:\n` +
        `- Aman's **Projects** (Portfolio, Visionora ATS, Logistics Platform)\n` +
        `- Technical **Skills** (React, Next.js 15, Node.js, Express, MongoDB, SQL)\n` +
        `- **Education** (BCA completed, MCA pursuing)\n` +
        `- Downloading his **Resume**\n` +
        `- **Contact** information\n\n` +
        `What would you like to know?`;
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate chat response." },
      { status: 500 }
    );
  }
}
