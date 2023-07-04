import React from "react";
import "./styles/Contact.css";
import MessageForm from "../components/Form";
import Git from "../src/assets/Icons/github-142-svgrepo-com.svg";
import Linkedin from "../src/assets/Icons/linkedin-round-svgrepo-com.svg";
import Behance from "../src/assets/Icons/behance-round-svgrepo-com.svg";
import Email from "../src/assets/Icons/gmail-svgrepo-com.svg";
import Header from "../components/Header";
function Contact() {
  return (
    <div className="Contact">
      <Header pageTitle="CONTACT" titleColor="#F8EAEA" />
      <h1 className="title-contact-work">Get in Touch</h1>

      <div className="title-contact">
        <p>
          Dropping a line to say g’day, ask for my resume or see if we can build
          something amazing together? I’d love to hear from you!
        </p>
        <p>
          Fill in your info in the form below and I look forward to hearing from
          you!
        </p>
        <MessageForm />
      </div>

      <p className="links-texto">Find me on these online spaces</p>
      <section className="contact-links">
        <a
          href="https://github.com/franalamo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Git} alt="git-logo" className="icon-logo" />
        </a>

        <a
          href="https://www.linkedin.com/in/francis-alamo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="linkedin-logo" className="icon-logo" />
        </a>

        <a
          href="https://www.behance.net/francisalamo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Behance} alt="behance-logo" className="icon-logo" />
        </a>

        <a
          href="mailto:alamofrancis@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Email} alt="email-logo" className="icon-logo" />
        </a>
      </section>
      <footer className="custom-footer">
        © 2023 | Designed & coded with 💙 by Fran
      </footer>
    </div>
  );
}

export default Contact;
