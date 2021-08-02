import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faKiwiBird ,faBars, faCodeBranch, faHamburger, faHashtag, faHome, faPencilAlt, faSignOutAlt, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";
import {Modal,Button} from "react-bootstrap";
import { useState } from "react";
import "../styles/Modal.css";

const Dashboard = () => {

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
    <>  
    
    <Modal dialogClassName="custom-modal" className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" >
        <div className='modal-title'><h3>Create Post</h3></div>
        <Link onClick={handleClose} className="close-Btn">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
        </Modal.Header>
        <Modal.Body>
          <textarea placeholder=" What's happening?"
           rows="6" autofocus className="modal-content" />
        </Modal.Body>
        <Modal.Footer>
          <Button  type="submit" className="post-btn" variant="primary" >Post</Button>
        </Modal.Footer>
    </Modal>


  <div className="grid-container">
    <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
    </div>
   
  <header  className="header">
    <div className="header__avatar"><h5>Welcome  👋</h5></div>

  </header>

  <aside style={{position:"fixed"}} className="sidenav">
    <div className="sidenav__close-icon">
        <FontAwesomeIcon icon={faHamburger} />
    </div>
   <Link style={{color:"white"}} to="/dashboard">
     <h2 className="dash-name">Dev <FontAwesomeIcon icon={faCodeBranch} /> </h2>
   </Link> 
    <ul className="sidenav__list">
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faHome} />  Home</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faUser} />  Profile</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faHashtag} />  Explore</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faPencilAlt} />  My Posts</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faSignOutAlt} />  Logout</li>
      <li className="sidenav__list-item"> <Button onClick={handleShow} className="side-post">Tweet</Button></li>
    </ul>
  </aside>


  <main className="main">
    <button onClick={scrollTop} className="top-btn">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>

     <Post />
     <Post />
     <Post />
     <Post />

  </main>

</div>
</>
    );
}
 
export default Dashboard;