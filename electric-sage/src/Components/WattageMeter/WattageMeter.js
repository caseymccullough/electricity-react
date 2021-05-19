import React, { useEffect, useState } from "react";
import '../../styles.css';
  
function WattageMeter({totalWattage}) {


 
 

 
 
  return (
    <div className="wattage-meter">
       <h1>Total Wattage {totalWattage}</h1>
    </div>
  );
}
  
export default WattageMeter;