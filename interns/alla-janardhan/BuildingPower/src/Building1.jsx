import Floor1 from "./Floor1";
import {useContext} from 'react';
import { MainPowerContext } from "./MainPowerHouse";
import { useNavigate } from "react-router-dom";
function Building({name}){
    const isOn = useContext(MainPowerContext)
    const navigate = useNavigate();
    return (
        <div className="Building">
        <h1 className="Building title">{name}</h1>
        <p className="Power">{isOn ? "Power is Available" : "Power is not Available"}</p>
        <button onClick={()=> {navigate("/")}} className="Button">Back</button>
        <Floor1  name = "Floor 1"/>
        <Floor1  name = "Floor 2"/>
        <Floor1  name = "Floor 3"/>
        
        </div>
    );
}

export default Building