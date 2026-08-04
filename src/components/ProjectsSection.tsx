import { Section } from './Section'
import { Card, Tag } from './ui'
import { projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-card-gap">
        {projects.map(({ number, title, event, year, description, bullets, tags, demoUrl }) => (
          <Card key={title} className="overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] items-start gap-8 px-12 py-10 max-tablet:grid-cols-1 max-tabsm:gap-5 max-tabsm:px-6 max-tabsm:py-[30px] max-phone:gap-4 max-phone:px-4 max-phone:py-6">
              <div>
                <div className="mb-5 font-mono text-card-title leading-none font-bold">{title}</div>
                <div className="mb-4 flex flex-col flex-wrap gap-3">
                  <span className="text-subtitle font-semibold text-accent">{event}</span>
                  <span className="text-body text-muted">{year}</span>
                </div>
                <p className="mb-6 max-w-[757px] text-body leading-[1.8] text-ink">{description}</p>
                <ul className="mb-6 flex flex-col gap-2">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-body leading-[1.7] text-muted before:absolute before:left-0 before:text-accent before:content-['–']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex min-w-[140px] flex-col items-end gap-3 max-tabsm:w-full max-tabsm:flex-row max-tabsm:items-start max-tabsm:justify-between">
                <div className="mb-2 text-right font-mono text-number leading-none font-bold text-ink-faint max-tabsm:text-left max-tabsm:opacity-40">
                  {number}
                </div>
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-[10px] rounded-sm border-[length:var(--border-width)] border-border bg-accent px-[22px] py-3 text-ui whitespace-nowrap text-white uppercase hover:-translate-y-0.5 hover:opacity-90 max-tabsm:px-[18px] max-phone:px-4 max-phone:py-[10px]"
                  >
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[length:var(--border-width)] border-current">
                      <span className="ml-[2px] h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current" />
                    </span>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
