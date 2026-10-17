import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  return (
    <a
      className="card"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project.image}
        alt={project.altText}
        loading="lazy"
        width="1200"
        height="750"
        className="w-full object-cover rounded-lg mb-3"
      />
      <h3 className="mb-1">{project.title}</h3>
      <p className="text-sm mb-2">{project.description}</p>
      <ul className="flex gap-2 list-none flex-wrap">
        {project.skills.map((skill) => (
          <li key={skill} className="pill-sm">
            {skill}
          </li>
        ))}
      </ul>
    </a>
  )
}

export default ProjectCard
