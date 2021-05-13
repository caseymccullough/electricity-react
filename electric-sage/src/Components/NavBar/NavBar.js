import {Link} from 'react-router-dom';
import style from "./NavBar.css";

export default function NavBar() {



   return (
      <div id="nav-container">
         <div id="nav-logo"></div>
         <nav>
            <ul>
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/addroom" >Add Room</Link></li>
               <li><Link to="/status" >Status</Link></li>
               <li><Link to="/sim">Simulation</Link></li>
               <li><Link to="/results">Results</Link></li>
            </ul>
         </nav>
      </div>
      
   )




}