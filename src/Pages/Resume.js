import React from "react";
import "../style/Resume.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import resumepdf from "../image/Resume.pdf";
import profile from "../image/profile.jfif";
import linkedin from "../image/linked.png";
import github from "../image/github.png";
import gmail from "../image/gmail.webp";
import Project from "../Component/Project";

function Resume() {
  return (
    <div className="resume-box">
      <div className="resume-heading">
        <div className="resume-head">
          <img src={profile} />
          <span id="first">Raktima Chaurasiya</span>
          <span id="second">Frontend Devloper</span>
          <div className="link-logo">
            <a>
              <img className="linkedin" src={linkedin} />
            </a>
            <img className="linkedin" src={github} />
            <img className="linkedin" src={gmail} />
          </div>
          <a href={resumepdf} download>
            <button className="downld-rsm-btn">DOWNLOAD CV</button>
          </a>
        </div>
        <div className="backgroundcolor"></div>
        <div className="resume-about">
          <span>Career Objective</span>
          <p>
            {" "}
            To Work for an organization which provides me the opportunity to
            improve my skills and knowledge to grow along with the organization
            objective.
          </p>
        </div>
      </div>

      <div className="resume-details">
        <div className="resume-details-about">
          <span
            style={{
              diplay: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Career Objective
          </span>
          <p>
            {" "}
            To Work for an organization which provides me the opportunity to
            improve my skills and knowledge to grow along with the organization
            objective.
          </p>
        </div>
        <div className="personal-info">
          <span id="head-personal" className="commonCss">
            Personal information
          </span>
          <div className="resume-info">
            <div className="resume-info-head">
              <span>FULL NAME :</span>
              <span>D.O.B :</span>
              <span>ADDRESS :</span>
              <span>E-MAIL :</span>
              <span>PHONE :</span>
              <span>GRADUATION :</span>
            </div>
            <div className="resume-info-details">
              <span>Raktima chaurasiya</span>
              <span>23 Nov 2000</span>
              <span>421306, Kalyan East, Maharashtra</span>
              <span>raktimachaurasiya@gmail.com</span>
              <span>+91 9116244842</span>
              <span>BSc. Computer Application</span>
            </div>
          </div>
        </div>
        <div className="resume-language">
          <h3
            className="commonCss"
            style={{ fontSize: "19px", padding: "5px 25px" }}
          >
            Work Experiance
          </h3>
          <div className="d-flex flex-column">
            <span style={{color:"black",fontWeight:"bolder",fontSize:"19px"}}>
              React native & React js developer
            </span>
            <span style={{ fontSize: "18px",color:"gray" }}>
              NXG Labs Pvt Ltd Pune(remote) , India
            </span>
            <span className="text-light" style={{textDecoration:"underline"}}>08/2022-present</span>
            <span className="text-light">Job description:</span>
            <ul className="text-light">
              <li>
                Facilitated smooth version control processes by utilizing Git
                workflows for efficient team collaboration on projects.
              </li>
              <li>
                Collaborated with cross-functional teams to develop seamless
                integration of APIs, improving data flow within applications.
              </li>
              <li>
                Enhanced user experience by implementing responsive web designs
                and optimizing application performance.
              </li>
              <li>
                Boosted application efficiency by incorporating Redux for state
                management and streamlining component rerendering.
              </li>
            </ul>
            
          </div>
         
        </div>
        {/* <div className="resume-language">
          <h3 className="commonCss">Language</h3>
          <div>
            <h3 className="text-light">Hindi</h3>
            <div id="lang">
              <div id="green-box"> </div>
              <div id="green-box"> </div>
              <div id="green-box"> </div>
              <div id="green-box"> </div>
              <div id="green-box"> </div>
              <span className="text-light">Native </span>
            </div>
          </div>
          <h3 className="text-light">English</h3>
          <div id="lang">
            <div id="green-box"> </div>
            <div id="green-box"> </div>
            <div id="green-box"> </div>
            <div id="green-box"> </div>
            <div id="green-box-empty"> </div>
            <span className="text-light">Fluent</span>
          </div>
        </div> */}
      </div>
      <div className="resume-education-box">
        <div className="eduactionCerti">
          <div className="education">
            <h2 id="eduacted">Education</h2>
            <span>Bachelor of science (Computer- Application)</span>
            <p>
              Veer Bahadur Singh Purvanchal University -2021 <br /> Status -
              Passed : 61.67%
            </p>
            <h3 style={{ color: "black", fontWeight: "700" }}>Course:</h3>
            <p>Relevel by Unacademy - Completed</p>
          </div>
          <div className="Certificate">
            <h2 id="eduacted">Certificate</h2>
            <ul>
              <li>Personality Devlopment From FEA</li>
              <li>ADCA (Advance Diploma in Computer Application)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-prof-skill">
        <h2>Professional Skills</h2>
        <div className="resume-skills">
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={90}
                  text={"90%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">HTML-5 </span>
          </div>
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">CSS</span>
          </div>
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={70}
                  text={"70%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">JAVA SCRIPT</span>
          </div>
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={90}
                  text={"90%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">REACT JS</span>
          </div>
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">BootStrap </span>
          </div>
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">React Native (Expo) </span>
          </div>
          <div className="skill1">
            <div label="Stroke width">
              <div style={{ height: "6rem", width: "6rem" }}>
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  strokeWidth={10}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "darkgreen",
                    trailColor: "gray",
                  })}
                />
              </div>
            </div>
            <span id="skill-head">Tailwind</span>
          </div>
        </div>

        <div className="resume-skills-mobile">
          <div className="skill-top ">
            <h3 className="text-light">HTML</h3>
            <h3 className="text-light">CSS</h3>
            <h3 className="text-light">JavaScript</h3>
            <h3 className="text-light">React js</h3>
            <h3 className="text-light">Bootstrap</h3>
          </div>
          <div className="d-flex flex-column ">
            <ProgressBar
              percent={90}
              filledBackground="green"
              width="30vh"
              height="3vh"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
                    width="30"
                  />
                )}
              </Step>

              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 70 : 90}%)` }}
                    width="30"
                    src=" https://originalsite.appsposure.com/wp-content/uploads/2016/07/Circle-Logo-no-background-1024x1013.png"
                  />
                )}
              </Step>
            </ProgressBar>
            <br />

            <ProgressBar
              percent={80}
              filledBackground="green"
              width="30vh"
              height="3vh"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                  />
                )}
              </Step>

              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 70 : 80}%)` }}
                    width="30"
                    src=" https://originalsite.appsposure.com/wp-content/uploads/2016/07/Circle-Logo-no-background-1024x1013.png"
                  />
                )}
              </Step>
            </ProgressBar>
            <br />

            <ProgressBar
              percent={70}
              filledBackground="green"
              width="30vh"
              height="3vh"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 70}%)` }}
                    width="30"
                  />
                )}
              </Step>

              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 70 : 70}%)` }}
                    width="30"
                    src=" https://originalsite.appsposure.com/wp-content/uploads/2016/07/Circle-Logo-no-background-1024x1013.png"
                  />
                )}
              </Step>
            </ProgressBar>

            <br />

            <ProgressBar
              percent={75}
              filledBackground="green"
              width="30vh"
              height="3vh"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 75}%)` }}
                    width="30"
                  />
                )}
              </Step>

              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 70 : 75}%)` }}
                    width="30"
                    src=" https://originalsite.appsposure.com/wp-content/uploads/2016/07/Circle-Logo-no-background-1024x1013.png"
                  />
                )}
              </Step>
            </ProgressBar>
            <br />

            <ProgressBar
              percent={80}
              filledBackground="green"
              width="30vh"
              height="3vh"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                  />
                )}
              </Step>

              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 70 : 80}%)` }}
                    width="30"
                    src=" https://originalsite.appsposure.com/wp-content/uploads/2016/07/Circle-Logo-no-background-1024x1013.png"
                  />
                )}
              </Step>
            </ProgressBar>
          </div>
        </div>
      </div>
      <div className="style-skill">
        <div className="soft-skill">
          <span style={{ color: "black", fontWeight: "700" }}>Styled List</span>
          <ul>
            <li>Passionate to work</li>
            <li>Handling Multi Tasks</li>
            <li>Creative Thinking</li>
            <li>Self Motivated</li>
          </ul>
        </div>
        <div className="soft-skill">
          <span style={{ color: "black", fontWeight: "700" }}>Hobbies</span>
          <ul>
            <li>Music reduce stress</li>
            <li>Exploring new things always teach something new </li>
            <li>Love to Travele </li>
            <li>Close to nature</li>
            <li>Dancing always gives me energy</li>
            <li> enjoy with coding</li>
          </ul>
        </div>
      </div>
      <span className="project">Projects</span>
      <Project />
    </div>
  );
}
export default Resume;
