import './styles.css';

import React, {useState, useEffect} from "react";
import { Route, Switch, Link } from "react-router-dom";

import LoadProfile from './Components/LoadProfile/LoadProfile';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import RunSim from './Components/RunSim/RunSim';
import Results from './Components/Results/Results'


export default function App() {

  const [showHome, setShowHome] = useState(true);
  const [showLoadProfile, setShowLoadProfile] = useState(false);
  const [showSim, setShowSim] = useState(false);
  const[showResults, setShowResults] = useState(false);


  const [users, setUsers] = useState([]);
  const [loads, setLoads] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [finalTime, setFinalTime] = useState(0);

  const [totalWattageHistory, setTotalWattageHistory] = useState([]);

  const closeAllPages = () =>
  {
    setShowHome(false);
    setShowLoadProfile(false);
    setShowSim(false);
    setShowResults(false);

  }
  const goToLoadProfile = () =>
  {
    closeAllPages();
    setShowLoadProfile(true);
  }


  const goToSim = () =>
  {
    closeAllPages();
    setShowSim(true);
  }

  const goToResults = () =>{
    closeAllPages();
    setShowResults(true);
  }


  const getUsers = async () => {
    try {
      const result = await fetch('https://electric-sage-api.herokuapp.com/user');
      const data = await result.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

    // Index
    const getLoads = async () => {
      try {
        const response = await fetch("https://electric-sage-api.herokuapp.com/load");
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
      <NavBar goToLoadProfile = {goToLoadProfile} goToSim = {goToSim} goToResults = {goToResults} currentUser = {currentUser}></NavBar>
      
      <main>
          {showHome ? <Home users = {users} setCurrentUser = {setCurrentUser} setShowLoadProfile = {setShowLoadProfile} setShowHome = {setShowHome}/> : <br></br>}
           {showLoadProfile ? <LoadProfile  currentUser = {currentUser} setLoads = {setLoads} loads = {loads} getLoads = {getLoads} setShowLoadProfile = {setShowLoadProfile} setShowSim = {setShowSim}/> : 
           <div/>}  {/*empty do-nothing tag */}
            {showSim ?  <RunSim loads = {loads} setFinalTime = {setFinalTime} seeResultsPage = {goToResults} totalWattageHistory = {totalWattageHistory} setTotalWattageHistory = {setTotalWattageHistory}></RunSim> : <div/>}  {/*empty do-nothing tag */}
            {showResults ? <Results loads = {loads} finalTime = {finalTime}></Results> : <div/>}  {/*empty do-nothing tag */}

        </main>
    </div>
    
  );
}


