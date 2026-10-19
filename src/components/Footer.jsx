import { FaLinkedin, FaGithub } from "react-icons/fa"
import MailButton from "./MailButton"

const Footer = () => {
  return (
    <section className="section" id="contact">
      <h2 className="section-heading">CONTACT</h2>
      <div className="flex flex-col gap-2">
        <a
          href="https://www.linkedin.com/in/teodorlien"
          target="_blank"
          rel="noopener noreferrer"
          className="iconlink"
        >
          <FaLinkedin size={16} />
          LinkedIn
        </a>
        <a
          href="https://www.github.com/Teodor29"
          target="_blank"
          rel="noopener noreferrer"
          className="iconlink"
        >
          <FaGithub size={16} />
          GitHub
        </a>
        <div className="relative">
          <MailButton size={16} label="Email" />
        </div>
      </div>
    </section>
  )
}

export default Footer
