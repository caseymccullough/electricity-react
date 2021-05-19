
import style from '../../styles.css';

import {useState} from "react";
import LoadList from '../LoadList/LoadList';
import StopWatch from '../Stopwatch/Stopwatch';
import WattageMeter from '../WattageMeter/WattageMeter';
import DynamicLoadList from '../DynamicLoadList/DynamicLoadList';


export default function RunSim({loads, seeResultsPage}) {

   const [totalWattage, setTotalWattage] = useState(0);
   const [time, setTime] = useState(0);
   const [totalWattageHistory, setTotalWattageHistory] = useState([]);

   const adjustTotalWattage = (delta) => {
      console.log("inside adjustTotalWattage");
      setTotalWattage (totalWattage + delta);
      const newWattageDelta = {
         time: time,
         wattage: totalWattage
      }
      

      setTotalWattageHistory(totalWattageHistory.concat(newWattageDelta));
      console.log (totalWattageHistory);
   }

   return (
      <div id="simulation">
         <h1>Simulation</h1>
         <div id="realtime-wattage"></div>
         <div id="stopwatch-wattage-container">
            <StopWatch time = {time} setTime = {setTime} />
            <WattageMeter totalWattage = {totalWattage} />
         </div>
         <DynamicLoadList loads = {loads} adjustTotalWattage = {adjustTotalWattage}></DynamicLoadList>

         <button id="see-results-btn" className="btn" onClick={seeResultsPage}>
                  <h3>See Results</h3>
               </button>  
      </div>
      
   )

}