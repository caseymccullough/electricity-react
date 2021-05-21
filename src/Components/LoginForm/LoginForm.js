import { useState, useEffect, useRef } from "react";
import style from '../../styles.css';

export default function LoginForm(props) {
  
   const usernameVal = useRef();
   const passwordVal = useRef();
 
   const handleSubmit = (event) => {
     event.preventDefault();
     console.log("users: ", props.users);

      const currentUser = props.users.find(user =>
       user.username === usernameVal.current.value && user.password === passwordVal.current.value);

         if(currentUser){
            console.log ("user found: ", currentUser);
            props.setShowHome(false);
            props.setShowLoadProfile(true);
         }
         else {
            console.log ("no such user");
         }
        
   }


 return (
   <div id="user-login-page" className="form">
     <h1>User Login</h1>

     <form onSubmit={handleSubmit} className="user-login-form">
       <label>
         Username:{" "}
         <input 
           type = "text" 
           name="username"
         
           ref={usernameVal} 
          // onChange={handleChange}
           ></input>
       </label>
       <br></br>
       <label>
         Password:{" "}
         <input type="text" 
         name="password"

         ref={passwordVal}
         //onChange={handleChange}
         ></input>
       </label>
       <br></br>

       <button onClick={handleSubmit}>Submit Data</button>
     </form>
 </div>
);
}