
import React, { useState } from "react";
import '../../styles.css';
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
  
function StopWatch({time, setTime, maxTimeMillisecs, isComplete, setIsComplete}) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) { // add chance to end. 
      
      interval = setInterval(() => {
        setTime((time) => time + 10); // 10 millisecs
        //console.log ("time: ", time, "target: ", maxTimeMillisecs, "interval: ", interval);
      }, 10);
      

    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
  
export default StopWatch;