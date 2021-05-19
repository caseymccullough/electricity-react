import {useState} from "react";
import "./ClickableLoad.css";

export default function ClickableLoad({load, adjustTotalWattage }) {

   const [isOn, toggleOnSwitch] = useState(false);

   const handleClick = () => {
      console.log ("click on ", load);
      
      toggleOnSwitch(!isOn);

      if (isOn){
         adjustTotalWattage(load.standbyWattage - load.wattage);
      }else{
         adjustTotalWattage(load.wattage - load.standbyWattage); // wattage will go down
      }
      
   }
   return (
      
         <tr className={isOn ? 'clickable-load load-on' : 'clickable-load load-off'} onClick={handleClick}>
            <td>{load.name}</td>
            <td>{load.wattage}</td>
            <td>{load.standbyWattage}</td>
            <td className="on-off-id">{isOn ? 'ON' : 'OFF'}</td>
            <td className="current-wattage">{isOn ? load.wattage : load.standbyWattage }</td>
            
         </tr>
     
      
   )

}