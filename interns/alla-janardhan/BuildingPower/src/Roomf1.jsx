import { useContext, useState } from "react"
import { MainPowerContext } from "./MainPowerHouse";
import { MeterContext } from "./Floor1";
function Roomf1({name}){
    const [isButton, setIsButton] = useState(true);
    const isOn = useContext(MainPowerContext);
    const isMeter = useContext(MeterContext);
    return(
        <div className="Room">
            <p>{name}</p>
             <div>
                Bulb
            </div>
            
                <button onClick={() => setIsButton(!isButton)} disabled = {!isOn||!isMeter} className='Buttton'>{isButton ? "TURN ON" : "TURN OFF" }</button>
           
        </div>
    )
}


export default Roomf1