import GoogleButton from 'react-google-button';

const Navbar = () => {
    return (  
        <nav className="navbar">
      <div className="container">
          <a href="/">
        <h1 className="logo">DevLog🔥</h1>
        </a>
        <ul className="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        <li>
            <a href="">SignIn</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}
 
export default Navbar;