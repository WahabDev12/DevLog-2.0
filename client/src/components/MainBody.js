import bgImage from "../Images/bgImage.svg";
import ImgTwo from "../Images/ImgTwo.svg";
import "../App.css";
import { Link } from "react-router-dom";

const MainBody = () => {
    return ( 
        <>
        <section id="home" className="section-showcase">
      <div className="container">
        <div>
          <h1>Connecting all developers.</h1>
        
          <p>
           DevLog is an open platform where programmers get the chance to socialize with each other and share their daily coding vibes.
          </p>
          <Link to="/signup" className="btn">Get Started</Link>
        </div>
        <img src={bgImage} alt="bg-image" />
      </div>
    </section>

    <section 
   
    id="home" className="section-showcase-second">
        <br />
        <h2 className="second-header">OUR MISSION</h2>
        <div className="line"></div>
      <div
   
      className="container-second">
        <img src={ImgTwo} alt="bg-image" />

        <div>
          <p className="mission">
       Our mission is to help developers socialize with other developers around the world.
        We accomplish this by creating an interactive platform where all developers can connect. We also have thousands of DevLog study groups. It's easy and free to post your thinking on any topic and connect with millions of developers.
          </p>
        </div>
      </div>
    </section>
    </>
    );
}
 
export default MainBody;