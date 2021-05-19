import React from "react";
import "./Timer.css";


  
export default function Timer(props) {

   const acc_factor = 10; // 

  return (
    <div id="timer-container">
       <div id = "timer">
         <span className="digits">
         {("0" + Math.floor((props.time / 60000 * acc_factor) % 60)).slice(-2)}:
         </span>
         <span className="digits minutes">
         {("0" + Math.floor((props.time / 1000 * acc_factor) % 60)).slice(-2)}
         </span>
      </div>
      <div>
         <p>Acceleration Factor: {acc_factor * 60}</p>
         <p>24 hours simulated in {24  / acc_factor} minutes</p>
      </div>
    </div>
  );
}