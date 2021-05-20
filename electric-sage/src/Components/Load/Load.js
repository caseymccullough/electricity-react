import {useState} from "react";

export default function Load({load}) {

   const [isOn, toggleOnSwitch] = useState(false);

   const handleClick = () => {
      console.log ("click on ", load);



   }
   return (
      
         <tr className="load-row" onClick={handleClick} className = {isOn ? 'load-on' : 'load-off'}>
            <button className="del-button">X</button><td>{load.name}</td><td>{load.wattage}</td><td>{load.standbyWattage}</td><td>{load.dailyUseHours}</td>
            
         </tr>
     
      
   )

}