
import {useState} from "react";

export default function RegisterForm(props) {
  
   /* name is name of thing to which it's bound  
     set formData to the spread of formData, find by name, assign value
      ...formData returns series of comma-separated values
      we add to that the name of one data item : the new value for that item
       this will overwrite the last one (!).  See #1 above. 
   */
     

   const handleChange = (event)=> {
     props.setUserFormData({ ...props.userFormData, [event.target.name]: event.target.value});
     console.log(event.target.name + ": " + event.target.value);
   }
 
 return (
   <div className="registration-page">
     <h1>Registration Form</h1>

     <form id="registration-form" onSubmit={props.createUser}>
       <label>
         Username
         <input 
           type = "text" 
           name="username"
           placeholder = "username"
           value={props.userFormData.username} 
           onChange={handleChange}
           ></input>
       </label>
       <br></br>
       <label>
         Password
         <input type="text" 
         name="password"
         placeholder = "password"
         value={props.userFormData.password}
         onChange={handleChange}
         ></input>
       </label>
       <br></br>
       <label>
         Zip code
         <input type="number" 
         name="zipcode"
         placeholder = "zip code"
         value={props.userFormData.zipcode}
         onChange={handleChange}
         ></input>
       </label>
       <button onClick={props.createUser}>Register</button>
     </form>
 </div>
);
}