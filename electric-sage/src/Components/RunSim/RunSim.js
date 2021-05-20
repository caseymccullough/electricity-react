
import style from '../../styles.css';

import {useState, useEffect} from "react";
import StopWatch from '../Stopwatch/Stopwatch';
import WattageMeter from '../WattageMeter/WattageMeter';
import DynamicLoadList from '../DynamicLoadList/DynamicLoadList';


export default function RunSim({loads, totalWattageHistory, setTotalWattageHistory, seeResultsPage}) {

   const [totalWattage, setTotalWattage] = useState(0);
   const [time, setTime] = useState(0);
   const [isComplete, setIsComplete] = useState(false);
   const maxTimeHours = 0.1; // Fix this!! Why doesn't it stop at given time? 
   const maxTimeMillisecs = maxTimeHours * 3600 * 1000;

   
   useEffect(() => {
                     setTotalWattage(calcTotalWattage(loads));
                  });
   
   const calcTotalWattage = (loads) => {
      
      let sum = 0; 
      loads.forEach(load => {sum += load.currentWattage});

      return sum; 

   }

   
   const adjustTotalWattage = (delta) => {
      //setTotalWattage (totalWattage + delta);
      const newWattageDelta = {
         time: time,
         wattage: totalWattage
      }
      setTotalWattageHistory(totalWattageHistory.concat(newWattageDelta));
      console.log (totalWattageHistory);
   }

   return (
      <div id="simulation">
         


         <div id="stopwatch-wattage-container">
            <StopWatch time = {time} setTime = {setTime} maxTimeMillisecs = {maxTimeMillisecs} isComplete = {isComplete} setIsComplete = {setIsComplete} />
  
            <WattageMeter totalWattage = {totalWattage} />
         </div>
         <DynamicLoadList loads = {loads} time = {time}></DynamicLoadList>
         
         <button id="see-results-btn"  onClick={seeResultsPage}>
            <h3>See Results</h3>
         </button>

         <div id="realtime-wattage"></div>


      </div>
      
   )

}