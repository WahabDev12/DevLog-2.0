import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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
          <Link to="">
            <FontAwesomeIcon icon={faLocationArrow} />  Info@devlog.com 
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faGlobe} />    www.devlog.com
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faEnvelope} />  DevLog02
          </Link>
          
        </div>
        <div>
          <h3>More Info</h3>
          <ul>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><Link to="#">Lorem ipsum dolor.</Link></li>
            <li><Link to="#">Lorem ipsum dolor.</Link></li>
            <li><Link to="#">Lorem ipsum dolor.</Link></li>
            <li><Link to="#">Lorem ipsum dolor.</Link></li>
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
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
                  placeholder="Enter your email..." /></span
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