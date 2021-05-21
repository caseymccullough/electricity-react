
import './Home.css';
import {useState} from "react";
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function Home({users, setCurrentUser, setShowLoadProfile, setShowHome}) {

   const [isNewUser, setIsNewUser] = useState(false);
   const toggleReg = () => {setIsNewUser(!isNewUser)};

   return (
      <div id="reg-login-container">
          
        {isNewUser ? <RegisterForm setCurrentUser = {setCurrentUser} setShowLoadProfile = {setShowLoadProfile} setShowHome = {setShowHome}></RegisterForm>:
                      <LoginForm setCurrentUser = {setCurrentUser} users = {users} setShowLoadProfile = {setShowLoadProfile} setShowHome = {setShowHome}></LoginForm>
        }
        <button onClick={toggleReg}>{isNewUser ? "Click to Log In" : "Click to Register"}</button>

      </div>
   );
}

