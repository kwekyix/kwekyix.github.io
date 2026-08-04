import { Section } from './Section'
import { Card } from './ui'
import { education } from '../data/education'

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-2 gap-card-gap max-tablet:grid-cols-1">
        {education.map(({ school, degree, period, coursesLabel, courses }) => (
          <Card key={school} className="px-[38px] py-9 max-tabsm:p-6">
            <div className="mb-[6px] font-mono text-card-title font-bold">{school}</div>
            <div className="mb-[6px] text-subtitle font-semibold text-accent">{degree}</div>
            <div className="mb-4 text-body text-muted">{period}</div>
            <div className="text-body leading-[1.8] text-muted">
              <strong className="font-semibold text-ink">{coursesLabel}</strong>
              <br />
              {courses}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
