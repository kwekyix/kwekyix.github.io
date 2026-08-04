import { Section } from './Section'
import { ExperienceCard } from './ExperienceCard'
import { activities } from '../data/activities'

export function ActivitiesSection() {
  return (
    <Section id="activities" title="Activities">
      <div className="flex flex-col gap-[3px]">
        {activities.map((activity) => (
          <ExperienceCard key={activity.org} {...activity} />
        ))}
      </div>
    </Section>
  )
}
