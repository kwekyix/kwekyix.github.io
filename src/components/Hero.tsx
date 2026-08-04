import { Container, Button } from './ui'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-[130px] pb-[130px] max-tabsm:min-h-0 max-tabsm:pt-[100px] max-tabsm:pb-[80px] max-phone:pt-[100px] max-phone:pb-[60px]">
      <Container>
        <div className="mb-[30px] inline-flex items-center gap-2 rounded-sm border border-border bg-accent-tint px-[18px] py-2 text-ui text-accent uppercase max-phone:mb-4">
          Available for internships &amp; opportunities
        </div>
        <h1 className="mb-[26px] w-full font-minecraft text-hero leading-[1.08] font-normal">
          <span className="block text-accent">Kwek Yi Xuan</span>
          <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-ink-stroke)]">
            Full-Stack Engineer
          </span>
        </h1>
        <p className="mb-11 max-w-[80%] text-body leading-[1.7] text-accent">
          Computer Engineering student at NTU Singapore.
          <br />
          I build full-stack platforms and explore the intersection between software and hardware
          to create seamless experiences. I also enjoy music, art and gaming!
        </p>
        <div className="flex gap-4 max-tabsm:flex-col max-tabsm:gap-3">
          <Button href="#projects" variant="primary" className="max-tabsm:w-full max-tabsm:justify-center">
            View Projects
          </Button>
          <Button href="#contact" variant="ghost" className="max-tabsm:w-full max-tabsm:justify-center">
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  )
}
