import { Section } from './Section'
import { Card } from './ui'
import type { Experience } from '../data/experience'

interface ExperienceSectionProps {
  id: string
  title: string
  items: Experience[]
}

export function ExperienceSection({ id, title, items }: ExperienceSectionProps) {
  return (
    <Section id={id} title={title}>
      <div className="flex flex-col gap-card-gap">
        {items.map(({ org, date, role, bullets }) => (
          <Card key={org} className="px-[42px] py-9 max-tabsm:p-6">
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-5 max-tabsm:flex-col max-tabsm:gap-2">
              <span className="font-mono text-card-title font-bold">{org}</span>
              <span className="text-body whitespace-nowrap text-muted">{date}</span>
            </div>
            <div className="mb-5 text-subtitle font-semibold text-accent">{role}</div>
            <ul className="flex flex-col gap-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-body leading-[1.7] text-muted before:absolute before:left-0 before:content-['–']"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
