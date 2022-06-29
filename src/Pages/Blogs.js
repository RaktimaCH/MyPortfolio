import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
 import "../style/Blogs.css";
import htmlSlide from "../image/html-logo.png";
import cssSilde from "../image/css-slide.jpg";
import  javascriptSlide from "../image/javascipt-slide.png";
import reactSlide from "../image/react-slide.png";
import blog from "../image/blog2-logo.jpg";
import back from "../image/background.webp";
 


function Blogs() {
  return (
    <div className="blog-container">

      <div className="container blog-img">
         <img src={blog}/>
         <hr/>
      </div>
      <div className="container blog-nav">
        
       <NavLink to="/html">


        <button className="btn-blog"><a href="#">HTML</a></button>
       </NavLink>
         
      <NavLink to="/css">

          <button className="btn-blog"><a href="#">CSS</a></button>
      </NavLink>
      <NavLink to="/javascript">
          <button className="btn-blog"><a href="#">JAVA
          <br/>
          SCRIPT</a></button>

      </NavLink>
      <NavLink to="/react">

          <button className="btn-blog"><a href="#">REACT</a></button>
      </NavLink>
      <NavLink to="/output">

          <button className="btn-blog"><a href="#">Guess<br/> the<br/> output?</a></button>
      </NavLink>
      <NavLink to="/questions">
      
         
          <button className="btn-blog"><a href="#">Interview <br/> Questions!!</a></button>
        

      </NavLink>
      
       
   </div>
        </div>
 
      
    
  );
}
export default Blogs;
