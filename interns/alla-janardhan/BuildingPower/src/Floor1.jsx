import { useEffect, useState, useContext, createContext } from "react";
import Roomf1 from "./Roomf1";
import { MainPowerContext } from "./MainPowerHouse";
const MeterContext = createContext();
export {MeterContext};
function Floor1({name}) {
  const [isMeter, setIsMeter] = useState(false);
  const isOn = useContext(MainPowerContext)
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
    <MeterContext.Provider value = {isMeter}>
    <div className="Floor">
      <h1>{name}</h1>

      <button onClick={handleToggle} className={isMeter ? "MeterOn" : "MeterOff"} disabled ={!isOn} >
        METER
      </button>

      <Roomf1 name = "Room 1"/>
      <Roomf1 name = "Room 2"/>
      <Roomf1 name = "Room 3"/>
    </div>
    </MeterContext.Provider>
  );
}

export default Floor1;
