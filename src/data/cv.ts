export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  // ——— WORK ———
  {
    title: 'Projektingenieur Photovoltaik',
    org: 'Koehlersolar GmbH',
    location: 'Monschau',
    period: '07/2023 – 12/2023',
    bullets: [
      'Mitarbeit an >5 MWp PV-Installationen auf Dächern',
      'Modernisierung von Schaltschränken → -20% Inbetriebnahmezeit & Fehlerquote',
      'Interne Prozessverbesserungen → +30% Teameffizienz',
    ],
    tags: ['Photovoltaik', 'Elektrotechnik', 'Prozessverbesserung'],
    type: 'work',
  },
  {
    title: 'Process & Development Engineer',
    org: 'Lumileds Germany GmbH',
    location: 'Aachen',
    period: '03/2021 – 06/2022',
    bullets: [
      'Optimierung kritischer Produktionsprozesse → +15% Stabilität',
      'Kostensenkungsprojekte → -10% Materialverluste',
      'Dokumentation von Verbesserungen über drei Linien',
    ],
    tags: ['Prozessoptimierung', 'Fertigung', 'KVP'],
    type: 'work',
  },
  {
    title: 'Customer Quality Engineer',
    org: 'Lumileds Germany GmbH',
    location: 'Aachen',
    period: '01/2011 – 03/2021',
    bullets: [
      'Hauptansprechpartner für internationale Kunden',
      'Bearbeitung >1000 Fälle/Jahr mit 8D, FMEA, 5-Why, Ishikawa',
      'CAPA-Steuerung → -10% Reklamationsrate; >50 Audits (Kunde/ISO)',
    ],
    tags: ['Qualitätsmanagement', '8D', 'FMEA', 'Audits'],
    type: 'work',
  },
  {
    title: 'Process Engineer',
    org: 'Philips BCA GmbH',
    location: 'Aachen',
    period: '01/2006 – 01/2011',
    bullets: [
      'Leitung von Lean/KVP-Projekten → ~15% Kostensenkung',
      'Einführung neuer Materialien & Prozessschritte (QM-konform)',
      'Sicherstellung ISO-9001-Compliance',
    ],
    tags: ['Lean', 'KVP', 'ISO 9001'],
    type: 'work',
  },
  {
    title: 'Supply Chain & Project Manager',
    org: 'Siemens AG',
    location: 'Kamp-Lintfort',
    period: '10/2004 – 12/2005',
    bullets: [
      'Bewertung >30 Lieferanten → bessere Lieferperformance',
      'Fehlerquote um ~15% reduziert durch Projektarbeit',
    ],
    tags: ['Supply Chain', 'Lieferantenmanagement', 'Qualität'],
    type: 'work',
  },

  // ——— EDUCATION ———
  {
    title: 'Software Engineering & KI (Training Program)',
    org: 'Masterschool',
    location: 'Remote',
    period: '09/2024 – 10/2025',
    bullets: [
      'Vertiefung in Python, CI/CD, DevOps & industrielle KI',
      'Team-Projekte inkl. Cloud-Deployment',
    ],
    tags: ['Python', 'CI/CD', 'DevOps', 'AI'],
    type: 'education',
  },
  {
    title: 'Physikalische Technik (Dipl.-Ing. (FH), Pat. Ing.)',
    org: 'FH Aachen',
    location: 'Aachen',
    period: '09/1991 – 04/1996',
    bullets: [
      'Diplomarbeit: Frequenzdetektion in der Rasterkraftmikroskopie',
    ],
    tags: ['Messtechnik', 'Ingenieurwesen'],
    type: 'education',
  },
  {
    title: 'Zertifikatsprogramm Gewerblicher Rechtsschutz (Patentingenieur)',
    org: 'FernUniversität Hagen',
    location: 'Hagen',
    period: '09/2005 – 09/2007',
    bullets: [
      'Qualifikation als Patentingenieur',
    ],
    tags: ['IP', 'Patente'],
    type: 'education',
  },
];
