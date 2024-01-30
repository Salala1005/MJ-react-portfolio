import '../App.css';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div>
            <div>
                <p className="intro">Hello, I'm MJ!</p>
                <h1 className='intro-description'>FrontEnd Developer</h1>
            </div>
            <div className="social d-flex justify-content-center" id="contact-icon">
            <a className="mx-3" href="https://www.linkedin.com/in/mijeong-jin-4aaa0a1a0/" target="_blank"><FaLinkedin /></a>
            <a className="mx-3" href="mailto:jin.mijeong@gmail.com" target="_blank"><MdEmail /></a>
            <a className="mx-3" href="https://github.com/Salala1005" target="_blank"><FaGithub /></a>
          </div>
    </div>
  )
}

export default Home;