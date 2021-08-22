import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faBars, faHamburger, faTrash} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import firebase from "../firebase/Firebase";
import { useState,useEffect } from "react";
import LoadSkeleton from "./LoadSkeleton";
import { useHistory } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";


const MyPost = () => {
    const {currentUser} = useAuth();
    const [postList,setPostList] = useState("");
    const [loading,setIsLoading] = useState(true);
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const {googleSignout} = useAuth();
    const history = useHistory();
    const userID = currentUser.uid

    // Handle Logout
    const handleLogout = async ()=>{
       await googleSignout();
       return history.push("/")
    }



    // Query user's individual Post on Load
    useEffect(()=>{
        const postRef =  firebase.database().ref("Post");
        postRef.orderByChild("userID").equalTo(`${currentUser.uid}`).on("value",(snapshot)=>{

        const posts = snapshot.val();
        const postList = []
      
        for(let id in posts){
            postList.push({id, ...posts[id]});

        }
        setPostList(postList);
        setIsLoading(false) ;

      

    });
    

    },[userID])

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
      <h3 className="dash-name">
         <div> 
       <img className="devlog" src="https://img.icons8.com/dusk/64/000000/code.png"/> 
      </div>
          <input className="search-bar" type="search" placeholder="🔎 Search DevLog..." /> 
      </h3>

   </Link> 
    <ul className="sidenav__list">
      <Link style={{color:"white"}} to="/dashboard">
      <li className="sidenav__list-item"> 🏠  Home</li>
      </Link>
      <Link style={{color:"white"}} to="/profile">
      <li className="sidenav__list-item"> 👨‍   Profile</li>
      </Link>
      <li className="sidenav__list-item">
         👨‍👦‍👦 <Link to="/chat" className="side-link">Group Chat</Link>
      </li>
      <li className="sidenav__list-item">  📝  My Posts</li>
      <Link style={{color:"white"}} onClick={handleLogout}>
      <li className="sidenav__list-item"> 🚶‍♂️ Logout</li>
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
        postList.length > 0 ? postList.map((post,index)=>
          
          <div key={index} className="tweet-wrap">
            <div className="tweet-header">
              <img src={post.userProfile} alt="user-photo" className="avator" />
              <div className="tweet-header-info">
                {post.userName} <span>@ {post.userName}</span>
                <br />
                <span>Posted at {post.timeStamp} . 🌎 
              </span>  
              </div>
            </div>

                <h6 className="post-caption">
            <ReactReadMoreReadLess
                charLimit={180}
                readMoreClassName="read-more"
                readLessClassName="read-less"
                readMoreText={"See More..."}
                readLessText={"See Less..."}
            >
                {post.caption}
            </ReactReadMoreReadLess>
                </h6>
            <div className="tweet-img-wrap">
              <img src={post.url} alt="" className="tweet-img" />
            </div>
            <div className="tweet-info-counts">
              <Link to={{pathname:`/post/del_edit/${post.id}`}} className="button-wraps">
              <div className="likes">
                ✏️
                <div className="likes-count">
                  Edit                    
                </div>
              </div>
              </Link>
              <Link  to={{pathname:`/post/del_edit/${post.id}`}} className="button-wraps">
              <div className="comments">
                🗑️
                <div className="comment-count">Delete</div>
              </div>
              </Link>
              </div>
               

            </div> 
         )
         .
         reverse(0)
         :
        <div className="post__error">
          <h3 className="postError__message">You have not made any posts yet 😢</h3>
         <br />
         </div>
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