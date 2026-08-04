import { Section } from './Section'
import { Card, Tag } from './ui'
import { skillGroups, hardwareSkills } from '../data/skills'
import { videos } from '../data/videos'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-card-gap">
        <div className="grid grid-cols-2 gap-card-gap max-tabsm:grid-cols-1">
          {skillGroups.map((group) => (
            <Card key={group.name} className="px-8 py-9">
              <div className="mb-4 font-mono text-card-title font-bold">{group.name}</div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-card-gap">
          <Card className="px-8 py-9">
            <div className="mb-4 font-mono text-card-title font-bold">{hardwareSkills.name}</div>
            <div className="flex flex-wrap gap-2">
              {hardwareSkills.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
            <div className="mt-[30px] flex flex-wrap justify-center gap-[60px] max-tabsm:mt-6 max-tabsm:flex-col max-tabsm:items-center max-tabsm:gap-10">
              {videos.map((video) => (
                <div
                  key={video.src}
                  className="flex max-w-[280px] flex-col items-center max-tablet:max-w-[240px] max-tabsm:w-full max-tabsm:max-w-full"
                >
                  <div className="h-[280px] w-[280px] overflow-hidden rounded-full border-2 border-accent shadow-[0_10px_30px_var(--color-shadow)] max-tablet:h-[240px] max-tablet:w-[240px] max-phone:h-[200px] max-phone:w-[200px]">
                    <video autoPlay loop muted playsInline className="block h-full w-full object-cover">
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <div className="mt-4 text-center max-tabsm:mt-3 max-tabsm:text-center">
                    <h3 className="mb-[6px] font-mono text-card-title font-bold text-accent">{video.title}</h3>
                    <p className="w-[280px] text-body leading-[1.5] whitespace-pre-line text-muted max-tablet:w-[240px] max-tabsm:w-full">
                      {video.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
