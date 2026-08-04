import type { PropsWithChildren } from 'react'
import { Container } from './ui'

interface SectionProps extends PropsWithChildren {
  id: string
  title: string
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-24 max-tabsm:py-16 max-phone:py-12">
      <Container>
        <div className="mb-[54px] flex items-baseline gap-[18px]">
          <h2 className="font-minecraft text-h2 leading-none font-normal">{title}</h2>
          <div className="ml-[18px] h-px flex-1 bg-border max-tabsm:hidden" />
        </div>
        {children}
      </Container>
    </section>
  )
}
