import { useEffect, useState } from "react";
import Roomf1 from "./Roomf1";

function Floor1({ isOn , name}) {
  const [isMeter, setIsMeter] = useState(false);

  useEffect(() => {
    if(!isOn){
        setIsMeter(false);
    }
  }, [isOn]);

  const handleToggle = () => {
    if(isOn){
        setIsMeter(!isMeter);
    }
  }
  return (
    <div className="Floor">
      <h1>{name}</h1>

      <button onClick={handleToggle} className={isMeter ? "MeterOn" : "MeterOff"} disabled ={!isOn} >
        METER
      </button>

      <Roomf1 name = "Room 1" isOn={isOn} isMeter = {isMeter}/>
      <Roomf1 name = "Room 2" isOn={isOn} isMeter = {isMeter}/>
      <Roomf1 name = "Room 3" isOn={isOn} isMeter = {isMeter}/>
    </div>
  );
}

export default Floor1;
