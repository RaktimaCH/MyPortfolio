import React from "react";
import google from "../image/google.jfif";
import tictac from "../image/tic-tac.webp";
import toDo from "../image/to-do.webp";
import quiz from "../image/quiz.png";
import calculator from "../image/calculator.jfif";
import ayurguide from "../image/ayurguidev2.webp";
import opensign from "../image/opensign.png";
import "react-step-progress-bar/styles.css";

const projects = [
  {
    title: "ToDo App",
    image: toDo,
    link: "https://obeqce.csb.app/",
  },
  {
    title: "Quiz App",
    image: quiz,
    link: "https://stunning-caramel-2279d8.netlify.app/",
  },
  {
    title: "Calculator",
    image: calculator,
    link: "https://24fb1u.csb.app/",
  },
  {
    title: "AyurGuide",
    image: ayurguide,
    link: "https://play.google.com/store/apps/details?id=com.nxglabs.ayurguide",
  },
  {
    title: "OpenSign",
    image: opensign,
    link: "https://www.opensignlabs.com/",
  },
];
function Project() {
  return (
    <div className="project-container">
      <div className="projects">
        {projects.map((data, id) => {
          return (
            <div className="project1" key={id}>
              <img src={data.image} />
              <div className="d-flex flex-column mt-3 ">
                <span id="project-head">{data.title}</span>
                <span id="project-btn">
                  <a href={data.link} target="_blank" rel="noreferrer">
                    View
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
