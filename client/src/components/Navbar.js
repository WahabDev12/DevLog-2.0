import { Link,useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';


const Navbar = () => {

   const history  = useHistory();
   const {authWithGoogle} = useAuth();
   const [error,setError] = useState("");
   const {currentUser} = useAuth();

   const handleGoogleLogin = async()=>{
        try{
          setError("")
          await authWithGoogle();
          console.log(currentUser.displayName)

        }

        catch(error){
          console.log(error.message);
          setError("Failed to create user")
        }
        history.push("/dashboard");
   }

    return (  
        <nav className="navbar">
      <div className="container">
          <Link to="/">
      <h2 className="logo"> <img className="devlog" src="https://img.icons8.com/dusk/64/000000/code.png"/> DevLog </h2>
        </Link>
        <ul className="nav">
          <li><Link href="/">Home</Link></li>
        <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link onClick={handleGoogleLogin} >
              <GoogleLogin theme="dark" className="g-btn" buttonText="Sign In" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}
 
export default Navbar;