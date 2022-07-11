import React, { useState } from "react";
import "../style/CssC.css";

//import  reactfirst from "../image/content-image/react/j.jfif";
import  reactsecond from "../image/content-image/react/react1.jfif";
import  reactthird from "../image/content-image/react/react2.jfif";
import  reactforth from "../image/content-image/react/react3.jfif";
import  reactfifth from "../image/content-image/react/special-symbols.jfif";
// import  reactsixth from "../image/content-image/react/react.jfif";
// import  reactseventh from "../image/content-image/react/react.jfif";

function ReactBlock() {
  return (
    <div className=" html-container">
      <div className="content ">
        {/* <img className="img" src={reactfirst} /> */}

        <img className="img" src={reactsecond} />

        <img className="img" src={reactthird} />
        <img className="img" src={reactforth} />
        <img className="img" src={reactfifth} />
        {/* <img className="img" src={reactsixth} />
        <img className="img" src={reactseventh} /> */}
      </div>
    </div>
  );
}

export default ReactBlock;
