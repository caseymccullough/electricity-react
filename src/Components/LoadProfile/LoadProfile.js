
import { useState, useEffect } from 'react';
import LoadBasicsForm from '../LoadBasicsForm';
import LoadList from '../LoadList/LoadList';


export default function LoadProfile( {currentUser, loads, getLoads, goToSim} ) {



   return (
      <div id="load-profile">
         <div id= "list-and-form">
            <div id="load-list-container" >
             
               <LoadList loads = {loads} ></LoadList>
               <button id="run-sim-btn" onClick={goToSim}>
                  Run Simulation
               </button> 
            </div>
            
            <LoadBasicsForm currentUser = {currentUser} getLoads = {getLoads}></LoadBasicsForm>
         </div>
      </div>
       
      
   )




}