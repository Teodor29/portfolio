import { FaGithub, FaLinkedin } from "react-icons/fa"
import MailButton from "./MailButton"

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault()
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="header h-full flex flex-col pb-6 md:py-28">
      <div>
        <div className="md:mb-16">
          <h1 className="text-5xl font-bold">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="text-fg-heading"
            >
              Teodor Lien
            </a>
          </h1>
          <h2 className="text-xl mb-3">Frontend Developer</h2>
        </div>

        <div className="hidden md:flex gap-3 md:gap-0 md:flex-col md:mb-8">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="navlink hidden md:block"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="navlink"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="navlink"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="navlink hidden"
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="flex gap-3 md:gap-4 md:mt-auto">
        <a
          href="https://github.com/Teodor29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="iconlink"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/teodorlien"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="iconlink"
        >
          <FaLinkedin size={30} />
        </a>
        <MailButton size={30} />
      </div>
    </div>
  )
}

export default Header
