export interface SkillGroup {
  name: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming',
    skills: [
      'Python',
      'C',
      'C++',
      'Java',
      'JavaScript',
      'TypeScript',
      'CSS',
      'React',
      'Next.js',
      'MATLAB',
      'Verilog',
    ],
  },
  {
    name: 'Cloud & Tools',
    skills: ['CI/CD', 'GitHub', 'GitLab', 'Linux', 'AWS Bedrock', 'Canva', 'Adobe XD', 'Figma', 'Blender'],
  },
  {
    name: 'Backend & Data',
    skills: ['SQL', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    name: 'Languages',
    skills: ['English (Fluent)', 'Mandarin (Fluent)'],
  },
]

export const hardwareSkills: SkillGroup = {
  name: 'Embedded & Hardware',
  skills: ['STM32', 'MSP432', 'Vivado'],
}
