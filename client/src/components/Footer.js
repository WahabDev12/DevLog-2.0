import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "../App.css"

const Footer = () => {
    return ( 
        <>
        <footer 
        
          style={{
              backgroundColor:"white",
              color:"#333"
          }}
        className="section-footer">
      <div className="container">
        <div className='social-links'>
          <h2>Follow Us</h2> 
          <a className="link" href="https://www.instagram.com/wah.760/">
            <img className="follow-icon" src="https://img.icons8.com/material-outlined/50/000000/instagram-new--v1.png"/> DevLogOfficial
          </a>
     
          <a className="link" href="https://twitter.com/NerdyProgramme2">
            <img className="follow-icon" src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>  DevLog02
          </a>
          <a className="link" href="http://github.com/WahabDev12/">
           <img className="follow-icon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>  WahabDev12
          </a>
          
        </div>
        <div>
          <h3>More Info</h3>
          <ul>
            <li className="link"><Link to="#">Services</Link></li>
            <li className="link"><Link to="#">About Us</Link></li> 
            <li className="link"><Link to="#">Privacy Policy</Link></li>
            <li className="link"><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li className="link"><Link to="#">Lorem ipsum dolor.</Link></li>
            <li className="link"><Link to="#">Lorem ipsum dolor.</Link></li>
            <li className="link"><Link to="#">Lorem ipsum dolor.</Link></li>
            <a href="https://icons8.com/icon/42900/code">Code icon by Icons8</a>
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Subscribe to our weekly newsletter</p>
          <form name="email-form">
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="60"
                  className="form-control"
                  placeholder="Enter your email..." /></span
              ><button type="submit" value="Submit" className="form-control submit">
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </footer>
    <div 
      className="copyright">
        <small>Made with ❤️ by Abdul-Wahab</small>
    </div>
    </>
    );
}
 
export default Footer;