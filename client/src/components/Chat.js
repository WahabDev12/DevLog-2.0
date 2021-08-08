import {ChatEngine} from "react-chat-engine";
import { useAuth } from "../contexts/AuthContext";
import { useEffect,useRef,useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../styles/Chat.css";
import {Link} from "react-router-dom";



const Chat = () => {

    const {currentUser} = useAuth();
    const history = useHistory();
    const [loading,setLoading] = useState(true);
    
    const getFile  = async (url)=>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data],"userPhoto.jpg",{type:"image/jpeg"})
    }

    useEffect(()=>{

        if(!currentUser){
            console.log("There is no user")

        }

        else{
            axios.get("https://api.chatengine.io/users/me",{
                headers:{
                    "project-id":"810d8b1a-f568-4bf1-bf74-bc4a636105c5",
                    "user-name":currentUser.email,
                    "user-secret":currentUser.uid

                }
            })
            .then(()=>{
                setLoading(false);
            })

            .catch(()=>{
                let formData = new FormData();
                formData.append("email",currentUser.email);
                formData.append("username",currentUser.displayName)
                formData.append("secret",currentUser.uid)

                getFile(currentUser.photoURL)
                .then((avatar)=>{
                formData.append('avatar',avatar,avatar.name)

                axios.post('https://api.chatengine.io/users/',
                formData,
                {
                    headers:{
                        "private-key":"7d939cef-f25e-469f-a3dc-a29142a1bf7b"
                    }
                }
                )
                .then(()=>setLoading(false))
                .catch(error => console.log(error))
        })
            })

        }
        
    },[currentUser,history])
    
    return ( 
        <>
          <header className="header">
                <h5 className="dev-header">
                <img className="devlog32" src="https://img.icons8.com/dusk/64/000000/code.png"/>
          DevLog Chat
      </h5>
    <div className="header__avatar">
   
      <Link className="go-dash" to="/dashboard">
          Dashboard
      </Link>
    
      <Link className="logout-chat">
          Logout
      </Link>

    </div>

  </header>
        <div className="chat-engine">
         <ChatEngine 
            height = "90vh"
            userName={currentUser.displayName}
			userSecret={currentUser.uid}
			projectID = '810d8b1a-f568-4bf1-bf74-bc4a636105c5'
           
          />    
        </div> 
     
        </>
    );
}
 
export default Chat;