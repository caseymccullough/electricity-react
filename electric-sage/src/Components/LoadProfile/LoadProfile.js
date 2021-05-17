
import { useEffect } from 'react';
import LoadBasicsForm from '../LoadBasicsForm';
import LoadList from '../LoadList/LoadList';

export default function LoadProfile( {currentUser, loads, getLoads} ) {

   return (
      <div id="load-profile">
         <h1>Load Profile</h1>
         <h1>{currentUser.username}</h1>
         <div id= "list-and-form">  
            <LoadList loads = {loads} ></LoadList> 
            <LoadBasicsForm currentUser = {currentUser} getLoads = {getLoads}></LoadBasicsForm>
         </div>
      </div>
       
      
   )




}