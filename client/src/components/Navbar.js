import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
      <div className="container">
          <Link to="/">
        <h1 className="logo">DevLog🔥</h1>
        </Link>
        <ul className="nav">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/signup">SignUp</Link></li>
        <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}
 
export default Navbar;