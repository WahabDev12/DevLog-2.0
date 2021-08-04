import "../styles/Post.css";
import Comment from "../Images/Comment.svg";
import Likes from "../Images/Likes.svg";
import {useState,useEffect} from "react";
import firebase from "../firebase/Firebase";
import { useAuth } from "../contexts/AuthContext";
import LoadSkeleton from "./LoadSkeleton";

const Post = () => {
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

          <div className="tweet-wrap">
            <div className="tweet-header">
              <img src={currentUser.photoURL} alt="user-photo" className="avator" />
              <div className="tweet-header-info">
                {currentUser.displayName} <span>@ {currentUser.displayName}</span>
                <span>. Jun 27
              </span>
                <br />
                <h6>{post.caption}</h6>
                
              </div>
        
              
            </div>
            <div className="tweet-img-wrap">
              <img src={post.url} alt="" className="tweet-img" />
            </div>
            <div className="tweet-info-counts">
              
              <div className="likes">
                <img src={Likes} />
                <div className="likes-count">
                    2.6k
                </div>
              </div>
              <div className="comments">
                  <img src={Comment} />
                <div className="comment-count">33</div>
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
 
        </>
     );
}
 
export default Post;