import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Resume from "./Pages/Resume";
import "./Myportfolio.css";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Html from "./Pages/Html";
import Css from "./Pages/Css";
import JavaScript from "./Pages/JavaScript";
import Reactjs from "./Pages/React";
import GuessOP from "./Pages/GuessOP";
import InterViewQ from "./Pages/InterViewQ";

function MyPortfolio() {
  const [menu, setMenu] = useState(false);
  const [item, setItem] = useState("item");
  const [navbar,setNavbar] = useState(false);

  function menuHandle() {
    setMenu(!menu);
    if (!menu) {
      setItem("view");
    } else {
      setItem("item");
    }
  }
  const changeColor=()=>{
    if(window.scrollY >= 80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeColor)
  return (
    <div>
      <Router>
        <div className={navbar ? 'navbar active' : 'navbar' }>
          <div className="navbar-logo">
            <div>
              <span className="logo-img">WEB DESIGN</span>
              <br />
              <span className="name-logo">By Raktima</span>
            </div>
            {menu ? (
              <div>
                <img
                  className="cross"
                  onClick={menuHandle}
                  src="https://www.shareicon.net/data/2015/08/15/85452_multiply_512x512.png"
                />
              </div>
            ) : (
              <div>
                <img
                  onClick={menuHandle}
                  className="menu"
                  src="https://vectorified.com/images/3-line-menu-icon-3.png"
                />
              </div>
            )}
          </div>
          <div className={`head ${item}`}>
            <ul className="App-header">
              <li>
                <Link id="home" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link id="home" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link id="home" to="/blogs">
                  Blogs
                </Link>
              </li>
               
              <li>
                <Link id="home" to="/resume">
                  <button className="resume-btn">Resume</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="about" element={<Projects />} />
          <Route exact path="blogs" element={<Blogs />} />
          <Route exact path="resume" element={<Resume />} />
          <Route exact path="/html" element={<Html/>}/>
          <Route exact path="/css" element={<Css/>}/>
          <Route exact path="/javascript" element={<JavaScript/>}/>
          <Route exact path="/react" element={<Reactjs/>}/>
          <Route exact path="/output" element={<GuessOP/>}/>
          <Route exact path="/questions" element={<InterViewQ/>}/>
        </Routes>
      </Router>
      {/* <div className="footer"> */}
        {/* <footer>
          <span className="footer-heading">GET IN TOUCH</span>
        
          <div className="img-contain">
            <a href="">
              <img className="linked"src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png" />
            </a>
            <a>
              <img className="linked" src="https://tse1.mm.bing.net/th?id=OIP.YyOMn9wj8tZCEyCPTYGlegHaHa&pid=Api&P=0&w=187&h=187" />
            </a>
            <a>
              <img  className=" gmail"  src="https://cdn.business2community.com/wp-content/uploads/2015/07/gmail-logo-2015-300x226.png.png" />
            </a>
          </div>
        </footer><hr/> */}
        {/* <div className="last-one">

        <span>Developed by <span>Raktima chaurasiya</span> Copyright  2021 all rights reserved</span>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default MyPortfolio;
