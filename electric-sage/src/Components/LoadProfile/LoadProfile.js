
import { useEffect } from 'react';
import LoadBasicsForm from '../LoadBasicsForm';
import LoadList from '../LoadList/LoadList';

export default function LoadProfile( {currentUser, loads, getLoads} ) {

   return (
      <div id="load-profile">
         <div id= "list-and-form">
            <div id="load-list-container" >
               <h1>Load Profile</h1>
               <LoadList loads = {loads} ></LoadList>
                
            </div>
            <LoadBasicsForm currentUser = {currentUser} getLoads = {getLoads}></LoadBasicsForm>
         </div>
      </div>
       
      
   )




}