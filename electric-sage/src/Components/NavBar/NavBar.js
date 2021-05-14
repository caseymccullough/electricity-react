import {Link} from 'react-router-dom';
import style from "./NavBar.css";

export default function NavBar() {

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
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/loads" >Load Profile</Link></li>
               <li><Link to="/status" >Status</Link></li>
               <li><Link to="/sim">Simulation</Link></li>
               <li><Link to="/results">Results</Link></li>
            </ul>
         </nav>
      </div>
      
   )

}