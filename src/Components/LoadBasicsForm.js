

export default function LoadBasicsForm(props) {
  
   /* name is name of thing to which it's bound  
     set formData to the spread of formData, find by name, assign value
      ...formData returns series of comma-separated values
      we add to that the name of one data item : the new value for that item
       this will overwrite the last one (!).  See #1 above. 
   */
   const handleChange = (event)=> {
     props.setFormData({ ...props.formData, [event.target.name]: event.target.value});
     console.log(event.target.name + ": " + event.target.value);
   }
 
   const handleSubmit = (event) => {
     event.preventDefault();
     console.log (props.formData);
    // props.setLatitude(formData.latitude);
    // props.setLongitude(formData.longitude);
 
   }


 return (
   <div className="load-basics-page">
     <h1>Load Basics Form</h1>
     <p>Submit Load Information Below</p>

     <form onSubmit={handleSubmit} className="load-basics-form">
       <label>
         Load
         <input 
           type = "text" 
           name="load-name" 
           value={props.formData.wattage} 
           onChange={handleChange}
           ></input>
       </label>
       <br></br>
       <label>
         Wattage
         <input type="text" 
         name="wattage"
         value={props.formData.wattage}
         onChange={handleChange}
         ></input>
       </label>
       <br></br>
       <label>
         Standby Wattage
         <input type="text" 
         name="standby-wattage"
         value={props.formData.standbyWattage}
         onChange={handleChange}
         ></input>
       </label>
       <button onClick={handleSubmit}>Submit Data</button>
     </form>
 </div>
);
}