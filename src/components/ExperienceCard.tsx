import type { Experience } from '../data/experience'

export function ExperienceCard({ org, date, role, bullets }: Experience) {
  return (
    <div className="overflow-hidden rounded-[3px] border-[1.5px] border-border bg-surface">
      <div className="px-[42px] py-9 max-tabsm:p-6">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-5 max-tabsm:flex-col max-tabsm:gap-2">
          <span className="font-mono text-[22px] font-bold">{org}</span>
          <span className="text-[16px] whitespace-nowrap text-muted">{date}</span>
        </div>
        <div className="mb-5 text-[18px] font-semibold text-accent">{role}</div>
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-5 text-[16px] leading-[1.7] text-muted before:absolute before:left-0 before:content-['–']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
