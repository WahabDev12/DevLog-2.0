import "../styles/Post.css";
import {useState,useEffect,useReducer} from "react";
import firebase from "../firebase/Firebase";
import { useAuth } from "../contexts/AuthContext";
import LoadSkeleton from "./LoadSkeleton";
import {Link} from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";


const initialState = {
  likes: 0
}

const appReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE':
      return {
        ...state,
        likes: state.likes + action.payload
      }
    default:
      return state
  }
}


const AllPost = () => {
    const [loading,setIsLoading] = useState(true);
    const [postList,setPostList] = useState("");
    const {currentUser} = useAuth();
    const [state, dispatch] = useReducer(appReducer, initialState)
    const { likes } = state
    const [status, setStatus] = useState(null)
  
  const handleLike = () => {
    if (status==='like') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_LIKE',
        payload: -1,
      })
    } else {
      setStatus('like')
      
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }

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
             <title>DevLog | Home</title>

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
                <br></br> 
                <span>
                Posted at {post.timeStamp} . 🌎 
              </span>  
              </div>
            </div>
            
                <h6 className="post-caption">
            <ReactReadMoreReadLess
                charLimit={180}
                readMoreClassName="read-more"
                readLessClassName="read-less"
                readMoreText={"See More..."}
                readLessText={"See less..."}
                
            >
                {post.caption}
            </ReactReadMoreReadLess>
                </h6>

            <div className="tweet-img-wrap">
              <img src={post.url} alt="" className="tweet-img" />
            </div>
            <div className="tweet-info-counts">
              <Link onClick={handleLike} className="button-wraps">
                {
                  status && 
                    <div className="likes">
                          ❤️
                <div className="likes-count">
                    {likes}
                    
                </div>
              </div>
                }

              {
                !status &&

                  <div className="likes">
                       💙
                <div className="likes-count">
                    {likes}
                    
                </div>
              </div>

              }
         
              </Link>
              <Link className="button-wraps">
              <div className="comments">
                💬
                <div className="comment-count">33</div>
              </div>
              </Link>
              </div>
            </div> 
         )
         .
         reverse(0)
         :
         <div><h2>There are (0) posts</h2>
         <br></br>
         <h5><Link>Create a new post</Link></h5>
         </div>
      }
   

      </div>
  }
 
        </>
     );
}
 
export default AllPost;