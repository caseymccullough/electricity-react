import {useState} from "react";

export default function LoadBasicsForm({currentUser, getLoads}) {

  //const [loads, setLoads] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    wattage: "",
    standbyWattage: 0,

    // add user info here??
  });
  /*
  const [nameProps, setName] = useInput("");
  const [wattageProps, setWattage] = useInput("");
  const [standbyWattageProps, setStandbyWattage] = useInput(0);
  const [dailyUseHoursProps, setDailyUseHours] = useInput("");
  const [dailyUseMinutesProps, setDailyUseMinutes] = useInput("");
*/
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const addLoad = async (e) => {
    e.preventDefault();

    //const hours = formData.dailyUseHours + formData.dailyUseMinutes / 60;
    const current = formData.standbyWattage;
    
    const body = { ...formData, isOn: false, onOffHistory: [0], currentWattage: current }; // spreads data from the form
    try {
      const response = await fetch ("https://electric-sage-api.herokuapp.com/load", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      
      console.log(JSON.stringify(body));

      setFormData({ // clear out the form
        name: "",
        wattage: "",
        standbyWattage: 0,
  
      });
    } catch(error){
        console.error(error);
    }finally{
      getLoads();
    }
    

  }





 return (
   <div className="load-basics-page">
     
     

     <form onSubmit={addLoad} className="form" id="add-load-form">
     <h2>Submit New Load</h2>
       <label>
         Load: {" "}
         <input 
           type = "text" 
           id = "name"
           value={formData.name}
           onChange={handleChange}
           required
           ></input>
       </label>
       <br></br>
       <label>
         Wattage: {" "}
         <input 
           type = "number" 
           id = "wattage"
           value={formData.wattage}
           onChange={handleChange}
           required
           ></input>
       </label>
       <br></br>
       <label>
         Standby Wattage: {" "}
         <input 
           type = "number" 
           id = "standbyWattage"
           value={formData.standbyWattage}
           onChange={handleChange}
           ></input>
       </label>
       

       <br></br>
       <button onClick={addLoad}>Add Load</button>
     </form>
 </div>
);
}