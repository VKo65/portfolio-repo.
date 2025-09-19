export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Volker Kolauch",
  role: "AI Engineer | Process & Quality Specialist",
  summary:
    "Ich kombiniere langjährige Erfahrung im Prozess- und Qualitätsmanagement mit aktueller Spezialisierung auf KI-gestützte Systeme. Meine Schwerpunkte liegen in Automatisierung, LLM-Integration (OpenAI, RAG, n8n) und datengetriebenen Lösungen. Mit Python, FastAPI und Node.js entwickle ich praxisnahe Prototypen bis hin zu produktiven Anwendungen – stets mit Fokus auf Effizienz, Verständlichkeit und Nutzererfahrung.",
  location: "Aachen, Deutschland",
  email: "volker.kolauch@gmail.com",
  lookingFor: "AI Engineering / Data & Process Automation Rollen",
  avatar: "/images/Profilbildlinkedin.png", // kannst du durch eigenes Bild ersetzen
  resumeUrl: "/resume", // dein PDF-CV kannst du ins `public/` legen
  skills: [
    "Python",
    "LLMs (OpenAI, RAG)",
    "n8n Automation",
    "FastAPI",
    "PostgreSQL / SQLite",
    "CI/CD",
    "TDD & Testing (Jest, Pytest, Playwright)",
    "Process & Quality Management",
    "Git",
    "HTML/CSS",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/VKo65" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/volker-kolauch" },
    { label: "Email", href: "mailto:volker@kolauch.de" },
  ],
};