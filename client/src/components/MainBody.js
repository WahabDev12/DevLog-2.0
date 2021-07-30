import bgImage from "../Images/bgImage.svg";
import ImgTwo from "../Images/ImgTwo.svg";
import "../App.css"
const MainBody = () => {
    return ( 
        <>
            <section
            style={{
                margin:"5.5rem 0",
                height:"23rem"
            }}
            id="home" className="section-showcase">
      <div className="container">
        <div>
          <h1>Connecting all developers.</h1>
        
          <p>
           DevLog is an open platform where programmers get the chance to socialize with each other and share their daily coding vibes.
          </p>
          <a href="#about" className="btn">Get Started</a>
        </div>
        <img src={bgImage} alt="bg-image" />
      </div>
    </section>

    <section 
    style={{
        backgroundColor:'#333',
        color:"white",
        height:'32rem'

    }}
    id="home" className="section-showcase">
        <br />
        <h2 className="second-header">OUR MISSION</h2>
        <div className="line"></div>
      <div
      style={{
          marginTop:"3.5rem",
      }}
      className="container">
        <img src={ImgTwo} alt="bg-image" />

        <div>
          <p className="mission">
       It's easy and free to post your thinking on any topic and connect with millions of developers.
       Our mission is to help developers socialize with other developers around the world.
        We accomplish this by creating an interactive platform where all developers can connect. We also have thousands of DevLog study groups around the world.
          </p>
        </div>
      </div>
    </section>
    </>
    );
}
 
export default MainBody;