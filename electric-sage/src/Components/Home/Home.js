
import './Home.css';
import {useState} from "react";
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function Home({setCurrentUser, createUser, setLoggedIn, users}) {

   const [isNewUser, setIsNewUser] = useState(false);
   const toggleReg = () => {setIsNewUser(!isNewUser)};

   return (
      <div id="reg-login-container">
          
        {isNewUser ? <RegisterForm setCurrentUser = {setCurrentUser} createUser = {createUser}></RegisterForm>:
                      <LoginForm setLoggedIn = {setLoggedIn} users = {users}></LoginForm>
        }
        <button onClick={toggleReg}>{isNewUser ? "Click to Log In" : "Click to Register"}</button>

      </div>
   );
}

