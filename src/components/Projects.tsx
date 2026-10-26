import ProjectCard from "./ProjectCard"
import type { Project } from "../data/portfolioData"

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">PROJECTS</h2>
      <div className="flex flex-col gap-8 md:gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
