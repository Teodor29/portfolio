import ProjectCard from "./ProjectCard.jsx"

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">PROJECTS</h2>
      <div className="flex flex-col gap-8 md:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
