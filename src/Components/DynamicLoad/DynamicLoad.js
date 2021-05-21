import {useState} from "react";
import "./DynamicLoad.css";

export default function DynamicLoad({load, time }) {

   //const [isOn, setIsOn] = useState(false);
   
   const toggleOnSwitch = () => {
      load.isOn = (!load.isOn);
      load.isOn ? issueOnOffReport(time): issueOnOffReport(-time);
   }

   const clearOnOffData = () =>
   {
      load.onOffData = [];
   }

   const turnOff = (time) => {
      if(load.isOn){
         toggleOnSwitch();
      }
   }

   const handleClick = () => {
      
      toggleOnSwitch();
      load.currentWattage = load.isOn ? load.wattage: load.standbyWattage; // ARRGH! Why??

   }

   const issueOnOffReport = (timeSignal) => { // negative means turned off

      load.onOffData.push(timeSignal);
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