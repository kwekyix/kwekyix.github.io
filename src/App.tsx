import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'
import { experience } from './data/experience'
import { activities } from './data/activities'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <EducationSection />
      <ExperienceSection id="experience" title="Experience" items={experience} />
      <ProjectsSection />
      <ExperienceSection id="activities" title="Activities" items={activities} />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

export default App
