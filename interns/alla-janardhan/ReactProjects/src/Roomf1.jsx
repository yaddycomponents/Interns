import { useState } from "react"

function Roomf1({name, isOn,isMeter}){
    const [isButton, setIsButton] = useState(true);
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