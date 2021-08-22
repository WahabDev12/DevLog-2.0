import { useAuth } from "../contexts/AuthContext";
import { Container,Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faBars, faHamburger,faTimes} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const {currentUser} = useAuth();
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

    const history = useHistory();
    const {googleSignout} = useAuth();

    
    const handleLogout = async ()=>{
       await googleSignout();
       history.push("/")
    }



    return (
         <>
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
         <Link>
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

          <div style={{display:"block",width:"700px",margin:"auto"}}>
        {/* <h2 style={{textAlign:"center"}}>Profile Dashboard</h2> */}
<Container className="profile-container">
    <div  className="profile-row">
        <div className="profile-badge">
            <div className="profile-pic">
                 <img src={currentUser.photoURL} 
                 style={{
                     width:"120px",
                     marginTop:"2rem",
                     height:"120px",
                     marginLeft:"16rem",
                     borderRadius:"1000px"
                    }}
                    name="DP"/>
                 <div style={{color:"#999"}} >  </div>
            </div>
            <div className="user-detail text-center">
                <div >
                <label style={{fontSize:"25px"}} for="Fname">Edit Profile</label>
        <input type="text" className="form-control field" disabled  value={currentUser.displayName}/>
                </div>
          
                <div >
                    <br/>
                {/* <label for="mobile">Mobile Number</label> */}
        <input type="text" className="form-control field" placeholder="Enter phone number"/>
                </div>
                <div >
                {/* <label for="email">Email</label> */}
                <br />
        <input type="email" disabled className="form-control field" value={currentUser.email}/>
                </div>
                <div >
                <br />
        <textarea rows="5" type="text" className="form-control field" placeholder="Bio"/>
                </div>
            </div>
            <input style={{marginBottom:"20px",marginTop:"10px"}} type="Button" className="btn btn-info" value="Update Profile"/>  
            <br />                                                             
        </div>
        <br/>

    </div>
</Container>
</div>
     <br />
     <br />
  </div>
  </main>

</div>
</>
    );
}
 
export default Profile;