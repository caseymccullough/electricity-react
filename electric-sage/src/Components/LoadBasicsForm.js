import {useState} from "react";

export default function LoadBasicsForm(props) {

  const [loads, setLoads] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    wattage: "",
    standbyWattage: 0,
    dailyUseHours: "",
    dailyUseMinutes: ""
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
      const data = await addLoad.json()

      setFormData({ // clear out the form
        name: "",
        wattage: "",
        standbyWattage: 0,
        dailyUseHours: "",
        dailyUseMinutes: "" // add user info here??
      });
    } catch(error){
        console.error(error);
    } finally {
      await getLoads();
    } 
  }


  // Index
  const getLoads = async () => {
    try {
      const response = await fetch("http://localhost:8800/load");
      const data = await response.json();
      setLoads([...data]);
    }catch(error) {
      console.error(error);
    }
  };

   /* name is name of thing to which it's bound  
     set formData to the spread of formData, find by name, assign value
      ...formData returns series of comma-separated values
      we add to that the name of one data item : the new value for that item
       this will overwrite the last one (!).  See #1 above. 
   

   */




 return (
   <div className="load-basics-page">
     <h1>Load Basics Form</h1>
     <p>Submit Load Information Below</p>

     <form onSubmit={addLoad} className="form" id="add-load-form">
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
         Daily Use
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
       <button onClick={addLoad}>Submit Data</button>
     </form>
 </div>
);
}