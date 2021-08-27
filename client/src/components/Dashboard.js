import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faBars, faHamburger,faTimes} from "@fortawesome/free-solid-svg-icons";
import AllPost from "./AllPosts";
import {Modal,Button} from "react-bootstrap";
import { useState,useEffect } from "react";
import "../styles/Modal.css";
import { useAuth } from "../contexts/AuthContext";
import {storage} from "../firebase/Firebase";
import firebase from "firebase";
import {Spinner,Alert} from "react-bootstrap";
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
    const [error,setError] = useState(true);
    const {googleSignout} = useAuth();
    const history = useHistory(); 


    // Set image load to false
    useEffect(()=>{
      scrollTop();
      setIsLoading(false);
      setError(false);
    },[])
  

    // Handle Image upload 
    const handleChange = (e)=>{

      setIsUploading(true);
      
   
      // Select image being choosen
      if(e.target.files[0]){
        setImage((e.target.files[0]));

      }
      else{
          setImage(null);
          setIsUploading(false);
          setError(true);
          setIsPosting(false);
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
    scrollTop();


  }

    return ( 
    <>  
     <title>DevLog | Home</title>
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
             <Alert variant="success">
               <h5 style={{textAlign:"center"}}>Image Uploaded succesfully</h5>
             </Alert>
          }

          {
            error &&
             <Alert variant="danger">
               <h5 style={{textAlign:"center"}}>No image was selected</h5>
             </Alert>

          }

          <textarea placeholder=" What's happening?"
           value={title} 
           onChange={(e)=>setTitle(e.target.value)}
           rows="6" autofocus className="modal-content" />
        </Modal.Body>
        <Modal.Footer>
          <div className="upload-btn-wrapper">
            <button className="btn-file">Upload Image </button>
            <input required type="file" onChange={handleChange} />
          </div>        
    <form onSubmit={handlePost}>
      {      
          !posting &&
    <Button type="submit" className="post-btn" variant="primary">Post</Button>
  
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
      
      <Link to="/profile" className="user-name-header">
   <h6 >
     <img className="profile-picture" src={currentUser.photoURL} />  {currentUser.displayName}  
    </h6>
    </Link>

         <Link to="/chat">
         <h5 className="getemoji">💬</h5> 
         </Link>
         <Link onClick={handleShow}>
          <h5 className="getemoji">🔔</h5> 
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
      <li className="sidenav__list-item"> 🏠 Home</li>
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
      <li className="sidenav__list-item"> <Button onClick={handleShow} className="side-post">Post</Button></li>
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