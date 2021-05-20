import {useState} from "react";
import "./DynamicLoad.css";

export default function DynamicLoad({load, time }) {

   //const [isOn, setIsOn] = useState(false);
   
   const toggleOnSwitch = () => {
      load.isOn = (!load.isOn);
   }

   const clearOnOffData = () =>
   {
      load.onOffData = [];
   }

   const turnOff = (time) => {
      if(load.isOn){
         load.isOn = false;
         issueOnOffReport();
      }
   }

   const handleClick = () => {
      
      toggleOnSwitch();
      load.currentWattage = load.isOn ? load.standbyWattage: load.wattage; // ARRGH! Why??
      issueOnOffReport(time);
   }

   const issueOnOffReport = (time) => {
      let onOffReport = {};
      if (load.isOn){ // just turned on
         
        // adjustTotalWattage(load.standbyWattage - load.Wattage);
         onOffReport = {
            time: time, // negative indicates being turned off
            wattage: load.currentWattage
         }
         
      }else{ // just turned off
         // adjustTotalWattage(load.wattage - load.standbyWattage); // wattage will go down
         onOffReport = {
            time: -time, // negative indicates being turned off
            wattage: load.currentWattage
         }
      }

      load.onOffData.push(onOffReport);

   }
   

   return (
      
         <tr className={load.isOn ? 'clickable-load load-on' : 'clickable-load load-off'} onClick={handleClick}>
            <td>{load.name}</td>
            <td>{load.wattage}</td>
            <td>{load.standbyWattage}</td>
            <td className="on-off-id">{load.isOn ? 'ON' : 'OFF'}</td>
            <td className="current-wattage">{load.currentWattage }</td>
            
         </tr>
     
      
   )

}