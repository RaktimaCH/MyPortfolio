import React,{useState} from 'react';
import "../style/CssC.css";
import {Modal} from "react-bootstrap";
 import cssfirst from "../image/content-image/css/css1.jfif";
import csssecond from "../image/content-image/css/css2.jfif";
import cssthird from "../image/content-image/css/css4.jfif";
import cssforth from "../image/content-image/css/css5.jfif";
import cssfifth from "../image/content-image/css/css6.jfif";
import csssixth from "../image/content-image/css/css7.jfif";
import cssseventh from "../image/content-image/css/css8.jfif";

function Css() {
  const [userModal, setUserModal] = useState(false);
  const showUserModal = () => {
    setUserModal(true);
  };
  const closeUserModal = () => {
    setUserModal(false);
  };

  return (
    <div className=' html-container'>
    <div className='content '> 

    
    <div className=" mt-3 mb-3 container">
             
            <img  onClick={showUserModal} className='img' src={cssfirst}/>
            

            <Modal
              show={userModal}
              onHide={closeUserModal}
              backdrop="static"
              centered
              
            >
              <Modal.Header closeButton>
               
              </Modal.Header>
              <Modal.Body 
               style={{width:"auto" }}
              >
                <form>
                  <div className="container p-1 ">
                    
                    <div className="input-group">
                    <img  className='img imgSecond' src={cssfirst}/>
                    </div>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </div>

          <div className=" mt-3 mb-3 container">
             
             <img  onClick={showUserModal} className='img' src={csssecond}/>
             
 
             <Modal
               show={userModal}
               onHide={closeUserModal}
               backdrop="static"
               centered
               
             >
               <Modal.Header closeButton>
                
               </Modal.Header>
               <Modal.Body 
                style={{width:"auto" }}
               >
                 <form>
                   <div className="container p-1 ">
                     
                     <div className="input-group">
                     <img  className='img imgSecond' src={cssthird}/>
                     </div>
                   </div>
                 </form>
               </Modal.Body>
             </Modal>
           </div>
             
             
    
  
    <img className='img' src={cssthird}/>
    <img className='img' src={cssforth}/>
    <img className='img' src={cssfifth}/>
    <img className='img' src={csssixth}/>
    <img className='img' src={cssseventh}/>
    </div>
</div>
  )
}

export default Css;