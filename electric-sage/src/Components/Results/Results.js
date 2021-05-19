import style from '../../styles.css';
import Chart from "react-google-charts";
import AreaChart from '../AreaChart/AreaChart';
import PieChart from '../PieChart/PieChart';



export default function Results({loads}) {

   const fakeData = [
      {
          "standbyWattage": 2,
          "_id": "609c3a0385a28933f7df5775",
          "name": "powertool",
          "wattage": 50,
          "__v": 0,
          "onOffSchedule": ["0-0", "1-4000", "0-9000", "1-40000", '0-60000']
      },
      {
          "standbyWattage": 0,
          "_id": "60a0fc5a9ba127b86e7bedc6",
          "name": "Lamp",
          "wattage": 100,
          "__v": 0,
          "onOffSchedule": ["1-0", "0-4000", "1-18000", "0-29000", "1-40000", '0-60000']
      },
      {
          "standbyWattage": 0,
          "_id": "60a174239ba127b86e7bedc8",
          "name": "fan",
          "wattage": 30,
          "__v": 0,
          "onOffSchedule": ["1-0"]
      }]

      //const calcOnHours ()

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