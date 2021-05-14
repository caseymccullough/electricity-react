export default function Load(props) {

   return (
      
         <tr classname="load-row">
            <td>{props.load.name}</td> <td>{props.load.wattage}</td><td>{props.load.standbyWattage}</td>
         </tr>
     
      
   )

}