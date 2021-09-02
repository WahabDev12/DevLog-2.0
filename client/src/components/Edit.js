import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faBars, faHamburger,faTimes} from "@fortawesome/free-solid-svg-icons";
import {Modal,Button,InputGroup} from "react-bootstrap";
import { useState,useEffect } from "react";
import "../styles/Modal.css";
import { useAuth } from "../contexts/AuthContext";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";



const Edit = () => {
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const {currentUser} = useAuth();
    const [loading,setIsLoading] = useState(true);
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes();
    const {googleSignout} = useAuth();
    const history = useHistory(); 
    const {id} = useParams();
    const [editing,setIsEditing] = useState(true);
    const [image,setImage] = useState("");
    const [posting,setIsPosting] = useState(false);





    // Set image load to false
    useEffect(()=>{
      scrollTop();
      setIsLoading(false);
      setIsEditing(false);
    },[])

   


    const returnToPosts = ()=>{
        return history.push("/myposts");
    }


    //LOGOUT OF APP

    const handleLogout = async ()=>{
       await googleSignout();
       history.push("/")
    }

    return (
        <>
          <title>DevLog | Posts</title>
        <div className="single-post">
<div className="grid-container">
    <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
    </div>
   
  <header  className="header">
    <div className="header__avatar">
      
      <Link className="user-name-header">
   <h6 >
     <img className="profile-picture" src={currentUser.photoURL} />  {currentUser.displayName}  
    </h6>
         <Link to="/chat">
         <h5 className="getemoji">💬</h5> 
         </Link>
         <Link >
          <h5 className="getemoji">🔔</h5> 
         </Link>
      </Link>
     

    </div>

  </header>

  <aside style={{position:"fixed"}} className="sidenav">
    <div className="sidenav__close-icon">
        <FontAwesomeIcon icon={faHamburger} />
    </div>
    <Link  to="/dashboard">
     <h3 className="dash-name">
       <div className="img-wrapper">
      <img className="devlog
     32" src="https://img.icons8.com/dusk/64/000000/code.png"/> 
     </div>
     <input className="search-bar" type="search" placeholder="🔎 Search DevLog...." /> </h3>
   </Link> 
    <ul className="sidenav__list">
        <Link to="/dashboard">
      <li className="sidenav__list-item"> 🏠 Home</li>
      </Link>
      <Link to="/profile">
      <li className="sidenav__list-item"> 👨‍  Profile</li>
      </Link>
      <li className="sidenav__list-item">
         👨‍👦‍👦 <Link to="/chat" className="side-link">Group Chat</Link>
      </li>
      <Link style={{color:"white"}} to="/myposts">
      <li className="sidenav__list-item"> 📝  My Posts</li>
      </Link>
      <Link style={{color:"white"}} onClick={handleLogout}>
      <li className="sidenav__list-item"> 🚶‍♂️  Logout</li>
      </Link>
    </ul>
  </aside>

  <main className="main">
    <div className="main-div">
    <button onClick={scrollTop} className="top-btn">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
 <div className="conf_wrapper">
             <Modal.Dialog dialogClassName="custom-modal-2" className="conf_modal">
            <Modal.Header >
                <Modal.Title><h3>Edit Post</h3></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form className="update_form">
                <textarea placeholder="Enter new caption" row="5" className="edit_area" />             
          </form>
            </Modal.Body>

            <Modal.Footer>
                
                <Button style={{backgroundColor:"#2b8bc7"}} >Update Post</Button>
                <Button onClick={returnToPosts} style={{backgroundColor:"#d9534f"}}>Cancel</Button>
              
            </Modal.Footer>
            </Modal.Dialog>
            </div>
     
     <br />
     <br />
  </div>
  </main>

</div>        </div>
        </>
    );
}
 
export default Edit;