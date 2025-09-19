export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Seelenfreund – KI-Begleiter für Demenzpflege",
    description:
      "Konzeption & Entwicklung eines multimodalen KI-Systems (Sprache, Bild, Musik, Text) zur Unterstützung von Pflegepersonal und zur Steigerung des Wohlbefindens von Menschen mit Demenz. Architektur mit Python, APIs und LLMs; Pilotphase in Seniorenheimen geplant.",
    tags: ["Python", "LLMs", "APIs", "Automation"],
    image: "/images/project-placeholder.svg",
    link: "", // später optional Landingpage
    repo: "", // privat lassen oder GitHub-Link
  },
  {
    title: "Bad Jokers – Hackathon Siegerprojekt",
    description:
      "Leitung eines 4-köpfigen Teams; humorvolle Web-Plattform mit Python, Flask & SQLite. REST-API und Datenbankmodell unter Zeitdruck umgesetzt. Gewürdigt für Kreativität, Teamarbeit und technische Umsetzung.",
    tags: ["Python", "Flask", "SQLite"],
    image: "/images/project-placeholder.svg",
    link: "",
    repo: "https://github.com/VKo65/Hackathon_BadJokers",
  },
  {
    title: "AI & Data Science Projekte (Masterschool)",
    description:
      "Automatisierungen mit n8n (z.B. E-Mail-Analyse & Reporting), Prototyping von RAG-Systemen, Prompt Engineering, Integration von OpenAI-APIs in Prozesse. Fokus auf praxisnahe, schnelle Umsetzung.",
    tags: ["n8n", "RAG", "OpenAI", "Python"],
    image: "/images/project-placeholder.svg",
    link: "",
    repo: "",
  },
];