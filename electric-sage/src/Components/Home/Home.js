
import './Home.css';
import {useState} from "react";
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function Home(props) {

   const [isNewUser, setIsNewUser] = useState(false);
   const toggleReg = () => {setIsNewUser(!isNewUser)};

   return (
      <div id="reg-login-container">
          
        {isNewUser ? <RegisterForm createUser = {props.createUser} userFormData = {props.userFormData} setUserFormData = {props.setUserFormData}></RegisterForm>:
                      <LoginForm users = {props.users}></LoginForm>
        }
        <button onClick={toggleReg}>{isNewUser ? "Click to Log In" : "Click to Register"}</button>

      </div>
   );
}

