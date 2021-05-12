import './styles.css';
import React, {useState} from "react";

import LoadBasicsForm from './Components/LoadBasicsForm';

export default function App() {

  const [loads, setLoads] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    wattage: 0,
    standbyWattage: 0
  });

  const createLoad = async (e) => {
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

      setFormData({ // clear out the form
        name: "",
        wattage: "",
        standbyWattage: ""
      });
    } catch(error){
        console.error(error);
    } finally {
      await getLoads();
    } 
  }

  /* called on in the forms */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.targetValue})
  };

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

  getLoads();
  console.log(loads);

  

  return (
    <div className="App">
      <LoadBasicsForm formData = {formData} setFormData = {setFormData}></LoadBasicsForm>
    </div>
  );
}


