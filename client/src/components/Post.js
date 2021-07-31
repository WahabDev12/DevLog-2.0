import "../styles/Post.css";
import Comment from "../Images/Comment.svg";
import Likes from "../Images/Likes.svg";
import Skeleton from 'react-loading-skeleton';
import {useState} from "react";

const Post = () => {
    const [loading,setIsLoading] = useState(false);

    return ( 
        <>
    {loading &&
    <div className="tweet-wrap">
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
        <Skeleton delay={1} count={7}/>
    
    </div>

    }
   {
       !loading && 
 <div className="tweet-wrap">
  <div className="tweet-header">
    <img src="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg" alt="" className="avator" />
    <div className="tweet-header-info">
      Steve Schoger <span>@Steve Schoger</span><span>. Jun 27
</span>
      <p>🔥 If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.</p>
      
    </div>
    
  </div>
  <div className="tweet-img-wrap">
    <img src="https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png" alt="" className="tweet-img" />
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
   }
 
        </>
     );
}
 
export default Post;