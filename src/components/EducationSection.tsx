import { Section } from './Section'
import { education } from '../data/education'

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-2 gap-[3px] max-tablet:grid-cols-1">
        {education.map(({ school, degree, period, coursesLabel, courses }) => (
          <div
            key={school}
            className="rounded-[3px] border-[1.5px] border-border bg-surface px-[38px] py-9 max-tabsm:p-6"
          >
            <div className="mb-[6px] font-mono text-[22px] font-bold">{school}</div>
            <div className="mb-[6px] text-[18px] font-semibold text-accent">{degree}</div>
            <div className="mb-4 text-[16px] text-muted">{period}</div>
            <div className="text-[16px] leading-[1.8] text-muted">
              <strong className="font-semibold text-ink">{coursesLabel}</strong>
              <br />
              {courses}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
