import React from "react";
import "./card.css";
const CardContainer = (props) => {
  return (
    <div>
      <div className="project-card">
        <img className="card-img" src={props.url} />
         
      </div>
    </div>
  );
};

export default CardContainer;
