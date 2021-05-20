import style from '../../styles.css';
import Chart from "react-google-charts";
import AreaChart from '../AreaChart/AreaChart';
import PieChart from '../PieChart/PieChart';



export default function Results({loads, totalWattageHistory}) {

   
   loads.forEach(load => console.log (load.onOffHistory));

   return (


      <div id="results">
         <h1>Results</h1>
         <div id="chart-container">
            <PieChart/>
            <AreaChart/>
         </div>
         
      </div>
      
   )

}