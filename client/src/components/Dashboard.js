import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faBars, faHamburger, faHome,
faPencilAlt, faSignOutAlt, faUsers, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import AllPost from "./AllPosts";
import {Modal,Button} from "react-bootstrap";
import { useState } from "react";
import "../styles/Modal.css";
import { useAuth } from "../contexts/AuthContext";
import {storage} from "../firebase/Firebase";
import firebase from "firebase";
import {Spinner,Alert} from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import { useHistory } from "react-router-dom";


const Dashboard = () => {

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {currentUser} = useAuth();
    const [posting,setIsPosting] = useState(false);
    const [uploading,setIsUploading] = useState(false);
    const [image,setImage] = useState("");
    const [loading,setIsLoading] = useState(true);
    const date = new Date();
    const [title,setTitle] = useState("");
    const time = date.getHours() + ':' + date.getMinutes();
    const [error,setError] = useState("");
    const {googleSignout} = useAuth();
    const history = useHistory(); 

    // Set image load to false
    window.onload = () =>{
        setIsLoading(false);
    }
    // Handle Image upload 
    const handleChange = (e)=>{

      setIsUploading(true);

      // Select image being choosen
      if(e.target.files[0]){
        setImage((e.target.files[0]));

      }
      else if(e.target.files[null]){
          setImage(null)
          setIsUploading(false);
      }

      else{
        setIsUploading(false);

      }

    };


    //LOGOUT OF APP

    const handleLogout = async ()=>{
       await googleSignout();
       history.push("/")
    }

    // Make Post 
    const handlePost = async (e) =>{
      
    e.preventDefault();
    setIsUploading(false);
    setIsPosting(true);

    // Create a firebase storage to store image
    const storageRef = storage.ref();
    const fileRef = storageRef.child(image.name)
    
    await fileRef.put(image);
    const postRef = firebase.database().ref("Post");

    // Post Schema
    const post = {

      name:image.name,
      userName:currentUser.displayName,
      userProfile:currentUser.photoURL,
      userID:currentUser.uid,
      author:currentUser.displayName,
      url: await fileRef.getDownloadURL(),
      caption:title,
      timeStamp:time,
    
    };

    try{

      postRef.push(post)
      setTitle("");
      setImage("");        
    }

    catch(error){

        console.log(error.message);
        setError(error.message);
    }

    setIsPosting(false);
    setShow(false);

  }

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

          {
            uploading && 
             <Alert variant="success">Image Uploaded succesfully</Alert>
          }

          <textarea placeholder=" What's happening?"
           value={title} 
           onChange={(e)=>setTitle(e.target.value)}
           rows="6" autofocus className="modal-content" />
        </Modal.Body>
        <Modal.Footer>
          <input required type="file" onChange={handleChange}  />
        
    <form onSubmit={handlePost}>
      {      
          !posting &&
    <Button type="submit" className="post-btn" variant="primary" >Post</Button>
  
     }  

      {
        posting &&

          <Button type="submit" className="post-btn" variant="primary" >   
               <Spinner animation="border" />
          </Button>

      }

    </form>
        </Modal.Footer>
    </Modal>



  <div className="grid-container">
    <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
    </div>
   
  <header  className="header">
    <div className="header__avatar">
      {
        !loading && 

      <Link className="user-name-header">
          <h5> {currentUser.displayName} <img className="profile-picture" src={currentUser.photoURL} /></h5>

      </Link>

      }      

      <Link>
        {
        loading && 
          <h5> 
             <Skeleton width={140} count={1} /> 
          </h5>
        }  
      
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
     <input className="search-bar" type="search" placeholder="🔎 Search...." /> </h3>
   </Link> 
    <ul className="sidenav__list">
      <li className="sidenav__list-item"> 🏠 Home</li>
      <li className="sidenav__list-item"> 👨‍  Profile</li>
      <li className="sidenav__list-item">
         👨‍👦‍👦 <Link to="/chat" className="side-link">Community Chat</Link>
      </li>
      <Link style={{color:"white"}} to="/myposts">
      <li className="sidenav__list-item"> 📝  My Posts</li>
      </Link>
      <Link style={{color:"white"}} onClick={handleLogout}>
      <li className="sidenav__list-item"> 🚶‍♂️  Logout</li>
      </Link>
      <li className="sidenav__list-item"> <Button onClick={handleShow} className="side-post">Tweet</Button></li>
    </ul>
  </aside>


 


  <main className="main">
    <div className="main-div">
    <button onClick={scrollTop} className="top-btn">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>

     <AllPost />
     <br />
     <br />
  </div>
  </main>

</div>
</>
    );
}
 
export default Dashboard;