import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import MailButton from "./MailButton"

const Footer = () => {
  return (
    <section className="section hidden" id="contact">
      <h2 className="section-heading">Contact me!</h2>
      <div className="flex flex-col gap-2">
        <p>
          <a
            href="https://www.linkedin.com/in/teodorlien"
            target="_blank"
            rel="noopener noreferrer"
            className="footerlink"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://www.github.com/Teodor29"
            target="_blank"
            rel="noopener noreferrer"
            className="footerlink"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
