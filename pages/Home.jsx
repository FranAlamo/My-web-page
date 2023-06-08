import React from "react";
import "../pages/styles/Home.css";
import Perfil from "../src/assets/img/franperfil.jpeg";
import MyButton from "../components/button";
import DropdownMenu from "../components/Menu.jsx";
import DesktopMenu from "../components/DesktopMenu";
function Home() {
  return (
    <div className="Home">
      <div className="hide-on-desktop">
        <DropdownMenu />
      </div>
      <div className="hide-on-mobile">
        <DesktopMenu />
      </div>

      <section className="title-section">
        <p className="first-title">Hello, I´m Fran</p>
        <span id="typed-text"></span>
        <h3 className="second-title">
          I like making fun and <br></br>interactive things with code.
        </h3>
      </section>
      <img src={Perfil} alt="Profile" className="fran-profile" />

      <section className="about-section">
        <h1 className="about">ABOUT</h1>
        <p className="who-is">Who is Fran?</p>
        <span className="span-title-one">
          A curiosity-driven Full Stack Web Developer with design chops <br />
        </span>
        <span className="span-title-two">
          I'm passionate about bringing both the technical and visual aspects of
          digital products to life. User experience, beautiful pixels and
          writing clean accessible. I enjoy building dynamic, creative products
          from start to finish 😉 I can design and also code!
        </span>
        <br />
        <br />
        <MyButton />
      </section>
    </div>
  );
}

export default Home;
