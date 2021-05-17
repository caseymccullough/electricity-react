export default function Load({load}) {

   return (
      
         <tr className="load-row">
            <td>{load.name}</td><td>{load.wattage}</td><td>{load.standbyWattage}</td><td>{load.dailyUseHours}</td>
         </tr>
     
      
   )

}