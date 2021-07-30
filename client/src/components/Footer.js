import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faGlobe, faLandmark, faLocationArrow, faTerminal } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return ( 
        <>
        <footer 
          style={{
              backgroundColor:"white",
              color:"#333"
          }}
        class="section-footer">
      <div class="container">
        <div className='social-links'>
          <h2>Follow Us</h2> 
          <a href="http://instagram.com">
            <FontAwesomeIcon icon={faLocationArrow} />  Info@devlog.com 
          </a>
          <a href="http://facebook.com">
            <FontAwesomeIcon icon={faGlobe} />    www.devlog.com
          </a>
          <a href="http://youtube.com">
            <FontAwesomeIcon icon={faEnvelope} />  DevLog02
          </a>
          
        </div>
        <div>
          <h3>More Info</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>Subscribe to our weekly newsletter</p>
          <form name="email-form" onsubmit="event.preventDefault()">
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="60"
                  class="form-control"
                  placeholder="E-mail" /></span
              ><button type="submit" value="Submit" class="form-control submit">
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </footer>
    <div  className="copyright">
        <small> Copyright &copy; DevLog 2020</small>
    </div>
    </>
    );
}
 
export default Footer;