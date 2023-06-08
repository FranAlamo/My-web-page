import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WorkItem from "./WorkItem";

const Carrousel = ({ works }) => {
  return (
    <Carousel>
      {works.map((work) => (
        <WorkItem key={work.id} work={work} />
      ))}
    </Carousel>
  );
};

export default Carrousel;
