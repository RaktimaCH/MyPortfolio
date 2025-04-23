import React from "react";

import Javascript from "../image/js.png";
import Css from "../image/css.png";
import Html from "../image/html.png";
import Reactapp from "../image/react.png";
import CardContainer from "../Component/Card";
import "../style/Home.css";

function Home() {
  return (
    <div className="Backcolor">
      <div className="home-container">
        <div className="home-box">
          <span>Hello, I am </span>

          <span id="name">Raktima Chaurasiya</span>

          <span id="front">Frontend Devloper</span>

          <span id="qual" >
            Skilled React.js Developer with experience in building dynamic,
            responsive, and high-performance web applications. Proficient in
            JavaScript (ES6+), React hooks, Redux, and component-based
            architecture. Strong understanding of front-end technologies
            including HTML5, CSS3, and modern UI/UX practices. Adept at
            integrating RESTful APIs, optimizing performance, and maintaining
            clean, modular code. Experienced in working within Agile/Scrum
            environments, collaborating with cross-functional teams, and
            delivering user-centric solutions.
          </span>
        </div>
        <div className="home-container-card">
          <div className="cardF">
            <CardContainer url={Html} />
            <CardContainer url={Css} />
          </div>
          <div className="cardS">
            <CardContainer url={Javascript} />
            <CardContainer url={Reactapp} />
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <span id="contact-head">GET IN TOUCH</span>
        <div className="container home-contact">
          <span id="contact-info">
            <span>
              <i
                style={{ color: "blue", fontSize: "2rem" }}
                class="bi bi-envelope-plus "
              ></i>
            </span>
            <br />
            <span>raktimachaurasiya@gmail.com</span>
            <button className="send-btn-btn">
              <a href="mailto:raktimachaurasiya@gmail.com">Send message</a>
            </button>
          </span>
          <span id="contact-info">
            <p>
              <i
                style={{ color: "blue", fontSize: "2rem" }}
                class="bi bi-whatsapp"
              ></i>
            </p>
            <span>whatsapp</span>
            <button className="send-btn-btn">
              <a
              rel="noreferrer"
                href="https://wa.me/+919116244842?text=Hello guys"
                target="_blank"
              >
                send message
              </a>
            </button>
          </span>
          <span id="contact-info">
            <p>
              <i
                style={{ color: "blue", fontSize: "2rem" }}
                class="bi bi-linkedin"
              ></i>
            </p>
            <span>Linked-in</span>
            <button className="send-btn-btn">
              <a
                href=" https://www.linkedin.com/in/raktima-chaurasiya-b63958205"
                target="_blank"
              >
                send message
              </a>
            </button>
          </span>
        </div>
      </div>

      <div className="contact-form">
        <form action="mailto:raktimachaurasiya@gmail.com">
          <input required className="inp" type="text" placeholder="Full Name" />
          <br />
          <input required className="inp" type="email" placeholder="Email" />
          <br />
          <textarea required className="mssge" placeholder="send message" />
          <br />
          <button type="submit" className="send-btn">
            {" "}
            <span>Send</span>
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
export default Home;
