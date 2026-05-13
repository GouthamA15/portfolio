export const personalInfo = {
  name: "Masna Goutham Kumar",
  roles: [
    "Full Stack Developer",
    "AI Systems Engineer",
    "Backend Developer",
    "UI/UX Engineer",
  ],
  tagline: "Building scalable systems at the intersection of AI and elegant interfaces.",
  bio: "I'm a Computer Science student passionate about crafting high-performance full-stack systems and intelligent AI-powered applications. I thrive at the crossroads of clean architecture and thoughtful design — turning complex problems into seamless digital experiences.",
  email: "goutham7819@gmail.com",
  phone: "+91 72075 62859",
  location: "Warangal, India",
  availableForWork: true,
  avatar: "/Profile.png",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/GouthamA15", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/masna-goutham-kumar", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/masnagoutham", icon: "twitter" },
];

export const education = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science",
    institution: "KUCET — Kakatiya University College of Engineering & Technology",
    period: "2023 — 2027",
    description: "Specializing in Data Science, distributed computing, and modern software engineering. Active in research on AI pipelines and campus-scale platforms.",
    current: true,
  },
  {
    id: "intermediate",
    degree: "Intermediate (MPC)",
    institution: "SR NVB Junior College",
    period: "2021 — 2023",
    description: "Completed intermediate education with Mathematics, Physics, and Chemistry stream. Developed a strong analytical foundation and early interest in programming.",
    current: false,
  },
];

export const projects = [
  {
    id: "kucet-cms",
    title: "KUCET College Management System",
    role: "Full Stack Developer",
    description:
      "A scalable college management platform designed for handling student operations, attendance systems, academic workflows, faculty management, and optimized administrative dashboards.",
    stack: ["Next.js", "TailwindCSS", "MySQL", "REST APIs"],
    repo: null,
    demo: null,
    featured: true,
  },
  {
    id: "campus-chatbot",
    title: "Interactive Campus Chatbot",
    role: "Backend Developer",
    description:
      "An AI-powered institutional assistant using semantic retrieval and dynamically processed university datasets to answer campus-related queries intelligently.",
    stack: ["ChromaDB", "RAG Pipelines", "Web Scraping", "Embeddings"],
    repo: null,
    demo: null,
    featured: true,
  },
  {
    id: "earlyrish",
    title: "Earlyrish.ai Medical Dashboard",
    role: "Full Stack Developer",
    description:
      "A healthcare analytics dashboard focused on real-time data operations, patient workflow management, and secure reporting systems.",
    stack: ["Node.js", "FastAPI", "Supabase"],
    repo: null,
    demo: null,
    featured: false,
  },
  {
    id: "bulk-cert",
    title: "Bulk Certificate Generator",
    role: "Full Stack Developer",
    description:
      "An automated platform for generating personalized certificates at scale using optimized PDF rendering workflows.",
    stack: ["Python", "PyPDF", "Automation Tools"],
    repo: null,
    demo: null,
    featured: false,
  },
  {
    id: "multiclient-dashboard",
    title: "MultiClient Template Dashboard",
    role: "Full Stack Developer",
    description:
      "A reusable dashboard architecture for deploying customizable admin systems with modular UI components.",
    stack: ["Next.js", "TailwindCSS", "TypeScript"],
    repo: null,
    demo: null,
    featured: false,
  },
];

export const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "TailwindCSS", "HTML/CSS", "Figma"],
  Backend: ["Node.js", "FastAPI", "Python", "REST APIs", "GraphQL", "Express"],
  "AI & ML": ["RAG Pipelines", "ChromaDB", "Embeddings", "LangChain", "OpenAI API"],
  Databases: ["MySQL", "Supabase", "PostgreSQL", "MongoDB", "Redis"],
  "Dev Tools": ["Git", "Docker", "GitHub Actions", "Vercel", "Linux", "VS Code"],
};
