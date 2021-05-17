import './styles.css';

import React, {useState, useEffect} from "react";
import { Route, Switch, Link } from "react-router-dom";

import LoadProfile from './Components/LoadProfile/LoadProfile';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import RunSim from './Components/RunSim/RunSim';
import Results from './Components/Results/Results'


export default function App() {

  const [users, setUsers] = useState([]);
  const [loads, setLoads] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  /* ignore this */
  const fakeLoads = [
    {
        "standbyWattage": 2,
        "_id": "609c3a0385a28933f7df5775",
        "name": "powertool",
        "wattage": 50,
        "hoursDaily": 1,
        "__v": 0
    },
    {
        "standbyWattage": 0,
        "_id": "60a0fc5a9ba127b86e7bedc6",
        "name": "Lamp",
        "wattage": 100,
        "hoursDaily": 3,
        "__v": 0
    },
    {
        "standbyWattage": 0,
        "_id": "60a174239ba127b86e7bedc8",
        "name": "fan",
        "wattage": 30,
        "hoursDaily": 10,
        "__v": 0
    },
    {
        "standbyWattage": 0,
        "_id": "60a174859ba127b86e7bedc9",
        "name": "light fixture",
        "wattage": 120,
        "hoursDaily": 12,
        "__v": 0
    },
    {
        "standbyWattage": 10,
        "_id": "60a174aa9ba127b86e7bedca",
        "name": "television",
        "wattage": 140,
        "hoursDaily": 3.5,
        "__v": 0
    }
  ]
  const fakeUser = {
    "username": "fake",
    "password": "fake",
    "zipcode": 99999,
    "loads": fakeLoads
  }



  const getUsers = async () => {
    try {
      const result = await fetch('http://localhost:8800/user');
      const data = await result.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
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

useEffect (() => {
  getUsers();
  getLoads();
}, []
);

/* my attempt to assign loads from current user. */

// useEffect(() => {
//   if(!currentUser) return;
//   setLoads(currentUser.loads);
// }, [currentUser]);

  return (
  
    <div className="App">
      <NavBar></NavBar>
      
      <main>
           {currentUser ? <LoadProfile  currentUser = {currentUser} setLoads = {setLoads} loads = {loads} getLoads = {getLoads}/> : 
           <Home users = {users} setCurrentUser = {setCurrentUser} />  
            } 
          { <Switch>
            {/* <Route exact path="/" render={() => <Home users = {users} createUser = {createUser} userFormData = {userFormData} setUserFormData = {setUserFormData} setCurrentUser = {setCurrentUser}/>} />
            <Route path="/status" render={() => <Status />} />
            <Route path="/loads" render={() => <LoadProfile loadFormData = {loadFormData} setLoadFormData = {setLoadFormData} currentUser = {currentUser}/> } /> */}
            <Route path="/sim" render={() => <RunSim />} />
            <Route path="/results" render={() => <Results />} />
          </Switch> }
        </main>
    </div>
    
  );
}


