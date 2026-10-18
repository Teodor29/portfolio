import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const ProjectCard = ({ project }) => {
  const mainLink = project.link ?? project.github

  return (
    <article className="card relative">
      <img
        src={project.image}
        alt={project.altText}
        loading="lazy"
        width="1200"
        height="750"
        className="w-full object-cover rounded-lg mb-3"
      />
      <h3 className="mb-1">
        <a
          href={mainLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-heading"
        >
          {project.title}
        </a>
      </h3>
      <p className="text-sm mb-2">{project.description}</p>
      <ul className="flex gap-2 list-none flex-wrap mb-3">
        {project.skills.map((skill) => (
          <li key={skill} className="pill-sm">
            {skill}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="iconlink"
          >
            <FiExternalLink size={16} />
            Live site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="iconlink"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
