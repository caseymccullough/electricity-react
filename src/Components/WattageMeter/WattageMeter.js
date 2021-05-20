import React, { useEffect, useState } from "react";
import '../../styles.css';
  
function WattageMeter({totalWattage}) {

  return (
    <div id="wattage-meter">
      <p id="total-wattage">{totalWattage} W</p>
      
       
    </div>
  );
}
  
export default WattageMeter;