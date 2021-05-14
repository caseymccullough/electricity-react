import './styles.css';

import React, {useState, useEffect} from "react";
import { Route, Switch, Link } from "react-router-dom";

import LoadProfile from './Components/LoadProfile/LoadProfile';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

import {
  Status,
  RunSim,
  Results
} from "./pages";

export default function App() {

  const [users, setUsers] = useState([]);
  const [loads, setLoads] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [userFormData,setUserFormData] = useState({
    username: "",
    password: "",
    zipcode: "",  
  });

  useEffect(() => {
    getUsers();
  })

  
  const [loadFormData, setLoadFormData] = useState({
    name: "",
    wattage: 0,
    standbyWattage: 0,
    hoursDaily: 0
   
  });
  const [isLoggedIn, setLoggedIn] = useState(false);

  
  const createUser = async (event) => {
    event.preventDefault();
    const body = {...userFormData}; // spreads data into the body
    try {
       const response = await fetch("http://localhost:8800/user", {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
     });
     // what to do after
    } catch(error) {
       console.error(error);
    } finally {
       await getUsers();
    }

  }

    // Index
 const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:8800/user");
    const data = await response.json();
    setUsers([...data]);
  } catch (error) {
    console.error(error);
  }
};

  const createLoad = async (e) => {
    e.preventDefault();
    const body = { ...loadFormData }; // spreads data from the form
    try {
      const response = await fetch ("http://localhost:8800/load", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      setLoadFormData({ // clear out the form
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
    setLoadFormData({ ...loadFormData, [e.target.id]: e.targetValue})
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



  

  return (
  
    <div className="App">
      <NavBar></NavBar>
      
      <main>
          <Switch>
            <Route exact path="/" render={() => <Home users = {users} createUser = {createUser} userFormData = {userFormData} setUserFormData = {setUserFormData} setCurrentUser = {setCurrentUser}/>} />
            <Route path="/status" render={() => <Status />} />
            <Route path="/loads" render={() => <LoadProfile loadFormData = {loadFormData} setLoadFormData = {setLoadFormData} currentUser = {currentUser}/> } />
            <Route path="/sim" render={() => <RunSim />} />
            <Route path="/results" render={() => <Results />} />
          </Switch>
        </main>
    </div>
    
  );
}


