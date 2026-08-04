export interface Experience {
  org: string
  date: string
  role: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    org: 'UMEOX Innovatives Co. Ltd., Oxtak (Shenzhen, China)',
    date: '06/2026 - 07/2026',
    role: 'Software Development Intern',
    bullets: [
      "Developed 4 pages for Oxtak's Shopify storefront and set up Stripe payment integration for the preorder page using Liquid templating, JSON section schemas, and JavaScript.",
      'Tested and prompt-engineered a multi-agent AI system for on-device deployment on Oxtak hardware, tuning behaviour across 4+ agent modules, improving agents’ memory and output.',
      "Built a Python and GitHub Actions CI/CD pipeline that scrapes and classifies news mentions of Oxtak across 8 languages, growing the site's published news archive to 30+ verified articles.",
    ],
  },
  {
    org: 'Raffles Kidz International',
    date: '05/2025 - 07/2025',
    role: 'Product Development Intern',
    bullets: [
      'Collaborated with 10+ developers and designers to test product and launch features across EDOOVO, an e-learning platform, to improve UI/UX for 500+ young learners and parents.',
      'Authored Oracle NetSuite software guides to standardise training for 10+ key members of staff.',
      'Managed external vendor communications to ensure software deliverables aligned with project milestones.',
    ],
  },
  {
    org: 'Self-Employed',
    date: '04/2024 – Present',
    role: 'Private Tutor',
    bullets: [
      'Led primary school group tutoring, improving academic performance in Mathematics, Chinese and Science.',
      "Designed creative and engaging lesson plans tailored to each student's unique learning needs.",
    ],
  },
]
