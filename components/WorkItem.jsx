import React from "react";

const WorkItem = ({ work }) => {
  return (
    <div className="work-item">
      <img src={work.image} alt={work.title} className="work-image" />
      <h2 className="title">{work.title}</h2>
      <p className="description">{work.description}</p>
    </div>
  );
};

export default WorkItem;
