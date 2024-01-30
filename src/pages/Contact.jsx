import ContactForm from "../components/ContactForm";
import '../App.css';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
          <div className="contact-info contact-page">
            <h2>CONTACT ME</h2>
              <ContactForm />
              <div className="contact-email-github row">
                <div className="col-6 container contact-detail">
                      <p className="contact-paragraph">
                      <MdEmail /><a href="mailto:jin.mijeong@gmail.com"> EMAIL ME</a>
                      </p>
                      <p className="contact-paragraph">
                      <FaGithub /><a href="https://github.com/salala1005" target="_blank" rel="noopener noreferrer"> SEE MORE OF MY WORK</a>
                      </p>
                </div>
              </div>
          </div>
  );
}

export default Contact;