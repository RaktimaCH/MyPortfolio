import React from "react";

import Javascript from "../image/js.png";
import Css from "../image/css.png";
import Html from "../image/html.png";
import Reactapp from "../image/react.png"
import CardContainer from "../Component/Card";
import "../style/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Backcolor">


    <div className="home-container">
      

      <div className="home-box">
        <span>Hello, I am </span>
       
        <span id="name">Raktima Chaurasiya</span>
        

        <span id="front">Frontend Devloper</span>
     
        <span id="qual">I build things for the web.</span>
      

       <button className="hire-btn">
       {/* <a style={{textDecoration:"none"}} href="mailto:raktimachaurasiya@gmail.com"> HIRE ME!</a> */}
       <a style={{textDecoration:"none"}} target="_blank" href="https://reactnative.dev/docs/accessibilityinfo"  > HIRE ME!</a>
        </button>
       
     
      
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
   <hr/>
    <div className="container  ">
   
    <span id="contact-head">GET IN TOUCH</span>
      <div className="container home-contact">

        <span id="contact-info">
        <span>
        <i style={{color:"blue",fontSize:"2rem"}} class="bi bi-envelope-plus "></i>
          </span><br/>
         <span>raktimachaurasiya@gmail.com</span>
         <button className="send-btn-btn"><a href="mailto:raktimachaurasiya@gmail.com">Send message</a></button>
        </span>
        <span id="contact-info">
          <p>
          <i style={{color:"blue",fontSize:"2rem"}}  class="bi bi-whatsapp"></i>
          </p>
          <span>whatsapp</span>
          <button className="send-btn-btn" ><a href="https://wa.me/+919116244842?text=Hello guys" target="_blank">send message</a></button>
        </span>
        <span id="contact-info">
         
         <p>
         <i style={{color:"blue",fontSize:"2rem"}}  class="bi bi-linkedin"></i>
         </p>
         <span>Linked-in</span>
         <button className="send-btn-btn" ><a href=" https://www.linkedin.com/in/raktima-chaurasiya-b63958205" target="_blank">send message</a></button>
        </span>
      </div>
      </div>
     
  
      <div className="contact-form">
       

      <form  action="mailto:raktimachaurasiya@gmail.com">
        <input className="inp" type="text" placeholder="Full Name"/><br/>
        <input  className="inp" type="email" placeholder="Email"/><br/>
        <textarea  className="mssge" placeholder="send message"  /><br/>
        <button className="send-btn">Send</button><br/>
         

      </form>
      </div>
       
    </div>
  );
}
export default Home;
