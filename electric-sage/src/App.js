import './styles.css';

import React, {Component, useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from 'react-router';
import LoadBasicsForm from './Components/LoadBasicsForm';
import LoginForm from './Components/LoginForm/LoginForm';
//import RegisterForm from './Components/RegisterForm/RegsisterForm'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

import {
  Status,
  AddRoom,
  RunSim,
  Results
} from "./pages";
import RegisterForm from './Components/RegisterForm/RegisterForm';


export default function App() {

  const [users, setUsers] = useState([]);

  const [userFormData,setUserFormData] = useState({
    username: "",
    password: "",
    zipcode: "",
    
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



  

  return (
  
    <div className="App">
      <NavBar></NavBar>
      
      <main>
        <RegisterForm createUser = {createUser} userFormData = {userFormData} setUserFormData = {setUserFormData}></RegisterForm>
        <LoginForm></LoginForm>

        <Switch>
          
          <Route path="/dev" render={() => <LoadBasicsForm formData = {formData} setFormData = {setFormData} /> } />
          <Route path="/status" render={() => <Status />} />
          <Route path="/addroom" render={() => <AddRoom />} />
          <Route path="/sim" render={() => <RunSim />} />
          <Route path="/results" render={() => <Results />} />
          </Switch>
        </main>
    </div>
    
  );
}


