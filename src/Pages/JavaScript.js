import React, { useState } from "react";
import "../style/CssC.css";

import jsfirst from "../image/content-image/js/js3.jfif";
import jssecond from "../image/content-image/js/js2.jfif";
import jsthird from "../image/content-image/js/js1.jfif";
import jsforth from "../image/content-image/js/js5.jfif";
import jsfifth from "../image/content-image/js/js6.jfif";
import jssixth from "../image/content-image/js/js7.jfif";
import jsseventh from "../image/content-image/js/js8.jfif";
import jsEight from "../image/content-image/js/js4.jfif";
import jsnine from "../image/content-image/js/addEvent.jfif";
import jsten from "../image/content-image/js/async.jfif";
import jsElv from "../image/content-image/js/clo-vs-class.jfif";
import jsTlv from "../image/content-image/js/js9.jfif";


 


function JavaScript() {
  return (
    <div className=" html-container">
      <div className="content ">
        <img className="img" src={jsfirst} />
        <img className="img" src={jssecond} /> 

        <img className="img" src={jsthird} />
        <img className="img" src={jsforth} />
        <img className="img" src={jsfifth} />
        <img className="img" src={jssixth} />
        <img className="img" src={jsseventh} />
        <img className="img" src={jsEight} />
        <img className="img" src={jsnine} />
        <img className="img" src={jsten} />
        <img className="img" src={jsElv} />
        <img className="img" src={jsTlv} />
      </div>
    </div>
  );
}

export default JavaScript;
