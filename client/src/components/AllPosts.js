import "../styles/Post.css";
import Comment from "../Images/Comment.svg";
import Likes from "../Images/Likes.svg";
import {useState,useEffect} from "react";
import firebase from "../firebase/Firebase";
import { useAuth } from "../contexts/AuthContext";
import LoadSkeleton from "./LoadSkeleton";
import {Link} from "react-router-dom";
import MyPost from "./MyPosts";

const AllPost = () => {
    const [loading,setIsLoading] = useState(true);
    const [postList,setPostList] = useState("");
    const {currentUser} = useAuth();

    useEffect(()=>{
    
    // Create Post Database on page load
    const postRef =  firebase.database().ref("Post");
    postRef.on("value",(snapshot)=>{

    const posts = snapshot.val();
    const postList = [];
      
    for(let id in posts){
        postList.push({id, ...posts[id]});

    }
    setPostList(postList);
    setIsLoading(false)

  });

    },[]);

    return ( 
        <>

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
                <br></br>
                <span>
                Posted at {post.timeStamp} . 🌎 
              </span>  
              </div>
            </div>
            
                <h6 className="post-caption">{post.caption}</h6>

            <div className="tweet-img-wrap">
              <img src={post.url} alt="" className="tweet-img" />
            </div>
            <div className="tweet-info-counts">
              <Link className="button-wraps">
              <div className="likes">
                ❤️
                <div className="likes-count">
                    2.6K
                    
                </div>
              </div>
              </Link>
              <Link className="button-wraps">
              <div className="comments">
                💬
                <div className="comment-count">33</div>
              </div>
              </Link>
              </div>
               <div style={{display:"none"}}>
                 <MyPost {...post} />
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
 
        </>
     );
}
 
export default AllPost;