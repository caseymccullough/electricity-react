import style from '../../styles.css';
import {useState} from "react";

export default function RegisterForm(props) {
  
       const [userFormData, setUserFormData] = useState({
        username: "",
        password: "",
        zipcode: "",  
      });

   const handleChange = (event)=> {
     setUserFormData({ ...userFormData, [event.target.name]: event.target.value});
     console.log(event.target.name + ": " + event.target.value);
   }

   const createUser = async (event) => {
    event.preventDefault();
    const body = {...userFormData}; // spreads data into the body
    try {
       const response = await fetch("https://electric-sage-api.herokuapp.com/user", {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    
    });
    console.log("response: ", response);
    } catch(error) {
       console.error(error);
    } 
  }

  const handleSubmit = () =>{
    createUser();
    props.setShowHome(false);
    props.setShowLoadProfile(true);
  }
 
 return (
   <div id="registration-page" className="form">
     <h1>Registration Form</h1>

     <form id="registration-form" onSubmit={createUser}>
       <label>
         Username
         <input 
           type = "text" 
           name="username"
           placeholder = "username"
           value={userFormData.username} 
           onChange={handleChange}
           ></input>
       </label>
       <br></br>
       <label>
         Password
         <input type="text" 
         name="password"
         placeholder = "password"
         value={userFormData.password}
         onChange={handleChange}
         ></input>
       </label>
       <br></br>
       <label>
         Zip code
         <input type="number" 
         name="zipcode"
         placeholder = "zip code"
         value={userFormData.zipcode}
         onChange={handleChange}
         ></input>
       </label>
       <button onClick={handleSubmit}>Register</button>
     </form>
 </div>
);
}