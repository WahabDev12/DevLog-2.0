import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars, faFlag, faHamburger, faHome, faPencilAlt, faSignOutAlt, faUser,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";

const Dashboard = () => {
    const scrollTop = () =>{
       window.scrollTo({top: 0, behavior: 'smooth'});
   };
    return ( 
        
    <>
    <div className="grid-container">
   <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
  </div>
   
  <header  className="header">
    <div className="header__avatar"><FontAwesomeIcon icon={faUserCircle} /> Abdul Wahab</div>
    <div className="header__avatar"><Link>New Post <FontAwesomeIcon icon={faPencilAlt} /></Link></div>
  </header>

  <aside style={{position:"fixed"}} className="sidenav">
    <div className="sidenav__close-icon">
        <FontAwesomeIcon icon={faHamburger} />
    </div>
   <Link style={{color:"white"}} to="/dashboard"><h2 className="dash-name">Dashboard</h2></Link> 
    <ul className="sidenav__list">
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faHome} />  Home</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faUser} />  Profile</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faPencilAlt} />  My Posts</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faFlag} />  Report</li>
      <li className="sidenav__list-item"> <FontAwesomeIcon icon={faSignOutAlt} />  Logout</li>
    </ul>
  </aside>


  <main className="main">
    <button onClick={scrollTop} className="top-btn"><FontAwesomeIcon icon={faArrowUp} /></button>

     <Post />
     <Post />
     <Post />
     <Post />

  </main>


</div>
</>
    );
}
 
export default Dashboard;