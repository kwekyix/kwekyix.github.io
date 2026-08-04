import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ActivitiesSection } from './components/ActivitiesSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ActivitiesSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

export default App
