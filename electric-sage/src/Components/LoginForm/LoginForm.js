import { useState, useEffect, useRef } from "react";

export default function LoginForm() {
  
   // const [userData, setUserData] = useState ({
   //    name: "",
   //    password:""
   // })

   const usernameVal = useRef();
   const passwordVal = useRef();

   // Need help with all validation related below.
 
   // const handleChange = (event)=> {
   //   props.setFormData({ ...props.formData, [event.target.name]: event.target.value});
   //   console.log(event.target.name + ": " + event.target.value);
   // }
 
   const handleSubmit = (event) => {
     event.preventDefault();
      const username = usernameVal.current.value;
      const password = passwordVal.current.value;
      //

      console.log (username);
      console.log (password);
   
   }


 return (
   <div className="user-login-page">
     <h1>User Login Form</h1>

     <form onSubmit={handleSubmit} className="user-login-form">
       <label>
         Username
         <input 
           type = "text" 
           name="username"
           placeholder = "username"
           ref={usernameVal} 
          // onChange={handleChange}
           ></input>
       </label>
       <br></br>
       <label>
         Password
         <input type="text" 
         name="password"
         placeholder = "enter password"
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