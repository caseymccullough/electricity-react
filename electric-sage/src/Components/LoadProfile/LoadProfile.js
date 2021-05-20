
import { useState, useEffect } from 'react';
import LoadBasicsForm from '../LoadBasicsForm';
import LoadList from '../LoadList/LoadList';


export default function LoadProfile( {currentUser, loads, getLoads, setShowLoadProfile, setShowSim} ) {

   const shiftToSim = () => {
      setShowLoadProfile(false);
      setShowSim(true);
   }

   return (
      <div id="load-profile">
         <div id= "list-and-form">
            <div id="load-list-container" >
               <h1>Load Profile</h1>
               <LoadList loads = {loads} ></LoadList>
               <button id="run-sim-btn" className="btn" onClick={shiftToSim}>
                  <h3>Run Simulation</h3>
               </button> 
       
            </div>
            <LoadBasicsForm currentUser = {currentUser} getLoads = {getLoads}></LoadBasicsForm>
         </div>
      </div>
       
      
   )




}