import Load from '../Load/Load';

export default function LoadList(props) {
      
   return (
      <div class="load-basic">
         <h2>List of Loads</h2>
         <table>
            <tr>
               <th>Load</th>
               <th>Wattage</th>
               <th>Standby</th>
            </tr>
         {props.loads.map((load, i) => 
            <Load load = {load} id= {i}></Load>)}
         </table>


      </div>
      
   )

}