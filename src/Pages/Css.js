import React, { useState } from "react";
import "../style/CssC.css";

import cssfirst from "../image/content-image/css/css1.jfif";
import csssecond from "../image/content-image/css/css2.jfif";
import cssthird from "../image/content-image/css/css4.jfif";
import cssforth from "../image/content-image/css/css5.jfif";
import cssfifth from "../image/content-image/css/css6.jfif";
import csssixth from "../image/content-image/css/css7.jfif";
import cssseventh from "../image/content-image/css/css8.jfif";

function Css() {
  return (
    <div className=" html-container">
      <div className="content ">
        <img className="img" src={cssfirst} />

        <img className="img" src={csssecond} />

        <img className="img" src={cssthird} />
        <img className="img" src={cssforth} />
        <img className="img" src={cssfifth} />
        <img className="img" src={csssixth} />
        <img className="img" src={cssseventh} />
      </div>
    </div>
  );
}

export default Css;
