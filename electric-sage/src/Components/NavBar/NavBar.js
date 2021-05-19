import { useThemeProps } from '@material-ui/data-grid';
import {Link} from 'react-router-dom';
import style from "./NavBar.css";

export default function NavBar(props) {

   return (
      <div id="nav-container">
         <div id="nav-logo">
            <a href="https://www.freeiconspng.com/img/4558"><img src="https://www.freeiconspng.com/uploads/electric-icon-21.png" width="100" alt="electric icon" /></a>
         </div>
         <div id="nav-center-text">
            <h1 id="nav-name">Electric Sage</h1>
            <h3>Offering insights to reduce your energy bill</h3>
         </div>
         <nav>
            <ul>
               <li onClick={props.goToLoadProfile}>Load Profile</li>
               <li onClick={props.goToSim}>Simulation</li>
               <li onClick={props.goToResults}>Results</li>

            </ul>
         </nav>
      </div>
      
   )

}