import React,{useState} from 'react';
import htmlfirst from "../image/content-image/html/html1.jfif";
import "../style/Html.css";
import htmlSecond from "../image/content-image/html/html3.jfif";
 
import htmlforth from "../image/content-image/html/html4.jfif"
import htmlfifth from "../image/content-image/html/html5.jfif"
import htmlsixth from "../image/content-image/html/html6.jfif"
import htmlseventh from "../image/content-image/html/html7.jfif"
import htmleighth from "../image/content-image/html/html8.jfif"


function Html() {

  const [sizeIncrease ,setSizeIncrease] = useState("increaseSize")
  const [imgSize, setImgSize] = useState("false")


 

  return (
    <div className=' html-container'>
        <div className='content'>

      <img className="img "
        src={htmlSecond}/>
      <img className='img' src={htmlfirst}/>
      <img className='img' src={htmlforth}/>
      <img className='img' src={htmlforth}/>
      <img className='img' src={htmlfifth}/>
      <img className='img' src={htmlsixth}/>
      <img className='img' src={htmlseventh}/>
      <img className='img' src={htmleighth}/>
        </div>
    </div>
  )
}

export default Html;