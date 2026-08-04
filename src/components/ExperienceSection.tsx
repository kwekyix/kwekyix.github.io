import { Section } from './Section'
import { ExperienceCard } from './ExperienceCard'
import { experience } from '../data/experience'

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-[3px]">
        {experience.map((exp) => (
          <ExperienceCard key={exp.org} {...exp} />
        ))}
      </div>
    </Section>
  )
}
