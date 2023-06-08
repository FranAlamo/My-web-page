import React from "react";
import "./styles/Skills.css";
import Header from "../components/Header";
import HTML from "../src/assets/Icons/html5-02-svgrepo-com.svg";
import CSS from "../src/assets/Icons/css3-02-svgrepo-com.svg";
import JavaScript from "../src/assets/Icons/java-script-logo-svgrepo-com.svg";
import Rea from "../src/assets/Icons/react-svgrepo-com.svg";
import Git from "../src/assets/Icons/git-svgrepo-com.svg";
import Github from "../src/assets/Icons/github-142-svgrepo-com.svg";
import VS from "../src/assets/Icons/vs-code-logo-microsoft-svgrepo-com.svg";
import PostgreSQL from "../src/assets/Icons/postgresql-svgrepo-com.svg";
import Adobe from "../src/assets/Icons/adobe-svgrepo-com.svg";
import Nod from "../src/assets/Icons/node-fill-svgrepo-com.svg";
import WordPress from "../src/assets/Icons/wordpress-139-svgrepo-com.svg";
import Figma from "../src/assets/Icons/figma-svgrepo-com.svg";
function Skills() {
  return (
    <div className="Skills">
      <Header pageTitle="SKILLS & TOOLS" titleColor="#F8EAEA" />

      <div className="title-skills">
        <h1 className="title-one">My Toolbox & Things I Can Do</h1>
        <p className="title-two">
          The skills, tools and technologies I use to bring your products to
          life:
        </p>
      </div>
      <section className="app-logos">
        <div className="logo-group">
          <div className="logo-item">
            <img src={HTML} alt="html-logo" className="icon-logos" />
            <span className="logo-name">HTML</span>
          </div>
          <div className="logo-item">
            <img src={CSS} alt="css-logo" className="icon-logos" />
            <span className="logo-name">CSS</span>
          </div>
          <div className="logo-item">
            <img
              src={JavaScript}
              alt="JavaScript-logo"
              className="icon-logos"
            />
            <span className="logo-name">JavaScript</span>
          </div>
          <div className="logo-item">
            <img src={Rea} alt="rea-logo" className="icon-logos" />
            <span className="logo-name">React</span>
          </div>
        </div>
        <div className="logo-group">
          <div className="logo-item">
            <img src={Git} alt="git-logo" className="icon-logos" />
            <span className="logo-name">Git</span>
          </div>
          <div className="logo-item">
            <img src={Github} alt="github-logo" className="icon-logos" />
            <span className="logo-name">GitHub</span>
          </div>
          <div className="logo-item">
            <img src={VS} alt="vs-logo" className="icon-logos" />
            <span className="logo-name">Visual Studio</span>
          </div>
          <div className="logo-item">
            <img
              src={PostgreSQL}
              alt="PostgreSQL-logo"
              className="icon-logos"
            />
            <span className="logo-name">PostgreSQL</span>
          </div>
        </div>
        <div className="logo-group">
          <div className="logo-item">
            <img src={Adobe} alt="adobe-logo" className="icon-logos" />
            <span className="logo-name">Adobe</span>
          </div>
          <div className="logo-item">
            <img src={Nod} alt="nod-logo" className="icon-logos" />
            <span className="logo-name">Node.js + Express</span>
          </div>
          <div className="logo-item">
            <img src={WordPress} alt="wordPress-logo" className="icon-logos" />
            <span className="logo-name">WordPress</span>
          </div>
          <div className="logo-item">
            <img src={Figma} alt="figma-logo" className="icon-logos" />
            <span className="logo-name">Figma</span>
          </div>
        </div>
      </section>
      <div className="working-on">
        <p className="skills-one">Currently working on:</p>
        <p className="skills-two">
          Improving my skills, and understanding of JavaScript
        </p>
      </div>
    </div>
  );
}

export default Skills;
