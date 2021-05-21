import { useThemeProps } from '@material-ui/data-grid';
import {Link} from 'react-router-dom';
import style from "./NavBar.css";

export default function NavBar(props) {

   return (
      <div id="nav-container">
         <div id="nav-logo-container">
            <a href="https://www.freeiconspng.com/img/4558"><img src="https://www.freeiconspng.com/uploads/electric-icon-21.png" width="100" alt="electric icon" /></a>
         </div>
         <div id="nav-center-text">
            <h1 id="nav-name">Electric Enlightenment</h1>
            <h3>Changing the way you think about energy</h3>
         </div>
         <nav>
         {/* {props.currentUser ? <p>Welcome {props.currentUser.username}</p> : <div/>} */}
            <ul>
               {props.currentUser === null ? <li onClick={props.goToLogin}>Login </li>: <li onClick={props.goToLogin}>Your Profile </li>}
               <li onClick={props.goToLoadProfile}>Load Profile</li>
               <li onClick={props.goToSim}>Simulation</li>
               <li onClick={props.goToResults}>Results</li>

            </ul>
         </nav>
      </div>
      
   )

}