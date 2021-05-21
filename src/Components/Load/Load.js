import {useState} from "react";

export default function Load({load}) {

   const clickResponse = () => {
      console.log (load.id);
      console.log (load.name);
      deleteLoad(load.name);
   }

   

   const deleteLoad = async (name) => {
      try {
        const response = await fetch(`https://electric-sage-api.herokuapp.com/load/${name}`, {
          method: "DELETE"
        })
      } catch (err) {
        console.log(err);
      } 
    }

   return (
      
         <tr className="load-row">
            <td><span className="del-button" onClick={clickResponse}>X</span></td><td>{load.name}</td><td>{load.wattage}</td><td>{load.standbyWattage}</td>
         </tr>
     
      
   )

}