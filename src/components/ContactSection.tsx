import { Container, Card, Button } from './ui'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-24 pb-[calc(6rem+env(safe-area-inset-bottom))] max-tabsm:pt-16 max-tabsm:pb-[calc(4rem+env(safe-area-inset-bottom))] max-phone:pt-12 max-phone:pb-[calc(3rem+env(safe-area-inset-bottom))]"
    >
      <Container>
        <Card className="px-16 py-20 text-center max-tabsm:px-[30px] max-tabsm:py-[50px] max-phone:px-5 max-phone:py-10">
          <div className="mb-5 text-ui text-accent uppercase">Let's work together</div>
          <div className="mb-4 font-minecraft text-h2 leading-[1.1] font-normal">
            Have a project
            <br />
            in <em className="text-accent not-italic">mind?</em>
          </div>
          <p className="mb-12 text-body text-muted">
            Open to internships, collaborations, and full-time opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-tabsm:flex-col max-tabsm:gap-3">
            <Button
              href="mailto:ykwek003@e.ntu.edu.sg"
              variant="primary"
              className="max-tabsm:w-full max-tabsm:justify-center"
            >
              Email
            </Button>
            <Button
              href="https://github.com/kwekyix"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="max-tabsm:w-full max-tabsm:justify-center"
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/yi-xuan-kwek-119620304"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="max-tabsm:w-full max-tabsm:justify-center"
            >
              LinkedIn
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  )
}
