import {useState} from "react";
import "./ClickableLoad.css";

export default function ClickableLoad({load, time }) {

   const [isOn, setIsOn] = useState(false);
   const [onOffData, setOnOffData] = useState([]);
   
   const toggleOnSwitch = () => {
      setIsOn(!isOn)
   }

   const handleClick = () => {
      
      toggleOnSwitch();
      load.currentWattage = isOn ? load.standbyWattage: load.wattage; // ARRGH! Why??

      let newWattageDelta = {};
      console.log ("inside handleClick");
      console.log ("newWattageDelta: ", newWattageDelta);

      if (isOn){ // just turned on
         
        // adjustTotalWattage(load.standbyWattage - load.Wattage);
         newWattageDelta = {
            time: time, // negative indicates being turned off
            wattage: load.currentWattage
         }
         
      }else{ // just turned off
         // adjustTotalWattage(load.wattage - load.standbyWattage); // wattage will go down
         newWattageDelta = {
            time: -time, // negative indicates being turned off
            wattage: load.current
         }
      }
      //console.log ("new item: ", newWattageDelta);
      onOffData.concat(newWattageDelta);

      console.log (onOffData);
   }
   return (
      
         <tr className={isOn ? 'clickable-load load-on' : 'clickable-load load-off'} onClick={handleClick}>
            <td>{load.name}</td>
            <td>{load.wattage}</td>
            <td>{load.standbyWattage}</td>
            <td className="on-off-id">{isOn ? 'ON' : 'OFF'}</td>
            <td className="current-wattage">{load.currentWattage }</td>
            
         </tr>
     
      
   )

}