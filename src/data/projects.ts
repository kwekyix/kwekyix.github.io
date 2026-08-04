export interface Project {
  number: string
  title: string
  event: string
  year: string
  description: string
  bullets: string[]
  tags: string[]
  demoUrl?: string
}

export const projects: Project[] = [
  {
    number: '04',
    title: 'EmoWeather',
    event: 'Women in Tech Beyond Binary Hackathon',
    year: '02/2026',
    description: 'A group mood-tracking app.',
    bullets: [
      'Designed and implemented responsive UI components using Tailwind CSS, ensuring consistent styling across mobile and desktop platforms.',
      'Deployed and managed a production-ready PostgreSQL database on Railway, using Prisma ORM for type-safe data access in a Next.js application.',
      'Built an interactive calendar and emotion graph that lets users visualise their mood patterns over time.',
    ],
    tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Railway', 'WCAG'],
    demoUrl: 'https://youtu.be/R3ttjxAkuLo',
  },
  {
    number: '03',
    title: 'HallMate',
    event: 'NTU Software Engineering',
    year: '09/2025 - 11/2025',
    description: 'A responsive hall swap platform for NTU residents.',
    bullets: [
      'Implemented responsive UI using Bootstrap and CSS, ensuring seamless user experience on website to facilitate hall searches and swaps between NTU residents.',
      'Developed a multi-step room swap request form using React with form state management.',
      'Optimised data fetching by integrating RESTful APIs with custom React hooks and session caching, reducing latency for user queries and filter operations.',
      'Maintained version control and documentation on GitHub to ensure seamless operations in a 4-member team.',
    ],
    tags: ['React', 'Bootstrap', 'RESTful API', 'Custom Hooks', 'GitHub'],
    demoUrl: 'https://youtu.be/PtXEydSWRCM',
  },
  {
    number: '02',
    title: 'Internship Placement Management System',
    event: 'NTU Object-Oriented Programming',
    year: '09/2025 - 11/2025',
    description:
      'Java console application that manages the entire lifecycle of internship postings, student applications, and staff approvals.',
    bullets: [
      'Applied SOLID principles architecting a layered Java system managing 500+ internship records across 3 stakeholder workflows.',
      'Leveraged OOP fundamentals like inheritance hierarchies, polymorphic interfaces and encapsulated domain models to build extensible filtering and approval workflows, reducing code duplication by 40%.',
      'Designed automated cascading operations with robust state management, ensuring data integrity across approval pipelines and demonstrating production-grade system reliability.',
    ],
    tags: ['Java', 'OOP', 'SOLID', 'GitHub'],
  },
  {
    number: '01',
    title: 'ConnectSG',
    event: 'SimplifyNext Agentic AI Hackathon',
    year: '08/2025',
    description: 'An agentic AI civic platform powered by AWS Bedrock.',
    bullets: [
      'Developed a dual-portal agentic AI-driven website using Streamlit to streamline civic reporting for residents and provide policy insights for decision-makers.',
      'Built an AI pipeline using AWS Bedrock to classify issues and provide residents with real-time assistance via JSON-parsed LLM responses.',
      'Implemented an administrative dashboard featuring automated AI issue modularisation and data visualisation to assist decision-makers in prioritising community feedback.',
    ],
    tags: ['AWS Bedrock', 'Streamlit', 'Agentic AI', 'LLM'],
    demoUrl: 'https://youtu.be/tdWePHOHObQ',
  },
]
