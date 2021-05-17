import Load from '../Load/Load';

export default function LoadList({loads}) {
      
 

   return (
      <div id="loads-table">
         <table>
         <caption>List of Loads</caption>
            <thead>
               <tr>
                  <th>Load</th>
                  <th>Wattage</th>
                  <th>Standby</th>
                  <th>Hours / Day</th>
               </tr>
            </thead>
            <tbody>
                  {loads.map((load, i) => 
               <Load load = {load} key= {i}></Load>
               )}
            </tbody>
         </table>


      </div>
      
   )

}