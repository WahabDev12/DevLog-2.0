import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (  
        <nav className="navbar">
      <div className="container">
          <Link to="/">
        <h1 className="logo">DevLog <FontAwesomeIcon icon={faCodeBranch} /></h1>
        </Link>
        <ul className="nav">
          <li><Link href="/">Home</Link></li>
        <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup">
              <GoogleLogin theme="dark" buttonText="Sign In" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}
 
export default Navbar;