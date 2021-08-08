import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faBars, faHamburger, faHome,
faPencilAlt, faSignOutAlt, faUsers, faTimes, faUser, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import firebase from "../firebase/Firebase";
import { useState,useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import Comment from "../Images/Comment.svg";
import Likes from "../Images/Likes.svg";
import LoadSkeleton from "./LoadSkeleton";
import { useHistory } from "react-router-dom";

const MyPost = () => {
    const {currentUser} = useAuth();
    const [postList,setPostList] = useState("");
    const [loading,setIsLoading] = useState(true);
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const {googleSignout} = useAuth();
    const history = useHistory();
    const id = currentUser.uid

    // Handle Logout
    const handleLogout = async ()=>{
       await googleSignout();
       return history.push("/")
    }


    useEffect(()=>{
        const postRef =  firebase.database().ref("Post");
        postRef.orderByChild("userID").equalTo(`${currentUser.uid}`).on("value",(snapshot)=>{

        const posts = snapshot.val();
        const postList = []
      
        for(let id in posts){
            postList.push({id, ...posts[id]});

        }
        setPostList(postList);
        setIsLoading(false)    

      

    });
    

    },[id])

    return ( 
        <>
         <div className="grid-container">
    <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
    </div>
   
  <header  className="header">

    <div className="header__avatar">
      
          <h5 className="your-post"> Your Posts 📕</h5>


    </div>

  </header>

  <aside style={{position:"fixed"}} className="sidenav">
    <div className="sidenav__close-icon">
        <FontAwesomeIcon icon={faHamburger} />
    </div>
   <Link style={{color:"white"}} to="/dashboard">
     <h3 className="dash-name"><img className="devlog
     32" src="https://img.icons8.com/dusk/64/000000/code.png"/> Dashboard </h3>
   </Link> 
    <ul className="sidenav__list">
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faHome} />  Home</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faUser} />  Profile</li>
      <li className="sidenav__list-item">
         <FontAwesomeIcon icon={faUsers} />  <Link to="/chat" className="side-link">Community Chat</Link>
      </li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faPencilAlt} />  My Posts</li>
      <Link style={{color:"white"}} onClick={handleLogout}>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faSignOutAlt} />  Logout</li>
      </Link>
    </ul>
  </aside>


  <main className="main">
    <button onClick={scrollTop} className="top-btn">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>


     
        {
          loading &&

          <LoadSkeleton />

        }
    
  
  {
       !loading &&  
       <div>
      {
        postList ? postList.map((post,index)=>

          <div key={index} className="tweet-wrap">
            <div className="tweet-header">
              <img src={post.userProfile} alt="user-photo" className="avator" />
              <div className="tweet-header-info">
                {post.userName} <span>@ {post.userName}</span>
                <span>. {post.timeStamp}
              </span>  
              </div>
            </div>
                <h6 className="post-caption">{post.caption}</h6>

            <div className="tweet-img-wrap">
              <img src={post.url} alt="" className="tweet-img" />
            </div>
            <div className="tweet-info-counts">
              
              <div className="likes">
                <Link>
                <div style={{backgorundColor:'blue'}} className="likes-count">
                  <h5>
                      <FontAwesomeIcon style={{color:'blue'}}  icon={faEdit} /> Edit
                  </h5>
                </div>
                </Link>
              </div>
              <div className="comments">
                <Link>
                <div   className="comment-count">
                  <h5>
                      <FontAwesomeIcon style={{color:'red'}}  icon={faTrash} /> Delete
                  </h5>
                
                  </div>
                </Link>
              </div>
              </div>
               

            </div> 
         )
         .
         reverse(0)
         :
         ""
      }
   

      </div>
  }
     <br />
     <br />

  </main>

  </div>
  </>

    );
}
 
export default MyPost;