import React from "react";
import Carousel from "../components/Carousel.jsx";
import Header from "../components/Header";
import "../pages/styles/Work.css";

const Work = () => {
  const works = [
    {
      id: 1,
      title: "AUDN",
      description:
        "For when you need a music app that matches your mood of the day and your activity",
      image: "/img/audn.jpg",
      githubRepo: "https://github.com/FranAlamo/Front-App-AUDN",
    },
    {
      id: 2,
      title: "POKEDEX",
      description:
        "A really cool project where we used HTML, CSS and JavaScript to create an attractive Pokédex",
      image: "/img/pokedek.jpg",
      githubRepo: "https://github.com/FranAlamo/PokeDex",
    },
    {
      id: 3,
      title: "TO DO LIST",
      description:
        "A list of tasks that an individual needs to complete or accomplish.",
      image: "/img/todolist.jpg",
      githubRepo: "https://github.com/FranAlamo/listaDeTareas",
    },
  ];

  return (
    <div className="Work">
      <Header pageTitle="WORK" titleColor="#F8EAEA" />
      <h1 className="title-contact-work">A Selection Of Stuff I've Built</h1>
      <Carousel works={works} className="custom-carousel" />
      <a
        href={works[0].githubRepo}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button type="submit" id="button-work">
          View Github Repo
        </button>
      </a>
    </div>
  );
};

export default Work;
