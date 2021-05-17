import {useState} from "react";

export default function LoadBasicsForm({currentUser, getLoads}) {

  //const [loads, setLoads] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    wattage: "",
    standbyWattage: 0,
    dailyUseHours: "",
    dailyUseMinutes: ""
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
    const body = { ...formData }; // spreads data from the form
    try {
      const response = await fetch ("http://localhost:8800/load", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      //const data = await addLoad.json()

      setFormData({ // clear out the form
        name: "",
        wattage: "",
        standbyWattage: 0,
        dailyUseHours: "",
        dailyUseMinutes: "" 
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
       <label>
         Daily Use: {" "}
         <input 
           type = "number"
           id = "dailyUseHours" 
           value={formData.dailyUseHours}
           onChange={handleChange}
           placeholder="hours"  
           ></input>
       </label>
      <label>
        :
       <input 
           type = "number"
           id = "dailyUseMinutes" 
           value={formData.dailyUseMinutes}
           onChange={handleChange}
           placeholder="minutes"  
           ></input>
      </label>

       <br></br>
       <button onClick={addLoad}>Add Load</button>
     </form>
 </div>
);
}