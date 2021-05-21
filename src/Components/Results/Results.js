import style from '../../styles.css';
import Chart from "react-google-charts";
import AreaChart from '../AreaChart/AreaChart';
import PieChart from '../PieChart/PieChart';
import { useEffect } from 'react';



export default function Results({loads, finalTime, totalWattageHistory}) {

   // for each load in the load array
   /* 
      1. generate time interval array.
      add element for beginning
      add off element for end
      create array of intervals (one less than data points)
      identify value of each interval

*/

   
   const addStart = () => {
      
      loads.forEach(function(load){
         let startedOn = (load.onOffData[0] < 0); // if first value is neg., it represents being turned off.
         if (startedOn){
            load.onOffData.shift(0); // a positive 0 indicates on
         }
         else
         {
            load.onOffData.shift(-0); // a negative zero . . yup. 
         }
      }
      )
   }

   const addEnd = () => {
      
      loads.forEach(function(load){
         const lastVal = load.onOffData[load.onOffData.length - 1];
         if (lastVal > 0) // still on at the end of sim
         {
            load.onOffData.push(-finalTime);
         }
         
         }
      ) // for each end
   }

   const populateKWH = (loads) =>  {

      for (let i = 0; i < loads.length; i++){
         const kwms = calcKWH(loads[i].onOffData, loads[i].wattage, loads[i].standbyWattage);
         loads[i].kwh = kwms / 600;
         console.log (loads[i].name, loads[i].kwh);
      }

   }

   const calcKWH = (timeSignals, wattage, standbyWattage) =>{
      console.log("time signals", timeSignals);
      const startedOff = (timeSignals[0] < 0); // negative times indicate "off"
      
      const times = timeSignals.map(n => Math.abs(n));
      const intervals = getIntervals(times);

      let evenSums = 0;
      let oddSums = 0;

      for (let i = 0; i < intervals.length; i++)
      {
         if (i % 2 === 0)
         {
            evenSums += intervals[i]
         }
         else{
            oddSums += intervals[i];
         } 
      }

      const kwh = startedOff ? oddSums * wattage + evenSums * standbyWattage:
                              evenSums * wattage + oddSums * standbyWattage;


      return kwh;

   }




   const getIntervals = (moments) => {
      const intervals = [];
      for (let i = 1; i < moments.length; i++ )
      {
         console.log (moments[i - 1], moments[i]);
         intervals.push(Math.abs(moments[i].time) - Math.abs(moments[i - 1].time));
      }
      return intervals;
      
   }





   useEffect(() => {
      console.log("useEffect in effect");
      addStart();
      addEnd();
      populateKWH(loads); 
      
     // console.log (loads[0].onOffData);
      //console.log (getIntervals (loads[0].onOffData));
      //loads.forEach (function(load) {getIntervals(load.onOffData);})
      

   });
   
   
  
 




   return (


      <div id="results">
         <h1>Results</h1>
         <div id="chart-container">
            <PieChart /*data={data} *//> // here!
            <AreaChart/>
         </div>
      </div> 
      )
   }