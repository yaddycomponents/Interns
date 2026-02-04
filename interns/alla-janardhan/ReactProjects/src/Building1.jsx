import Floor1 from "./Floor1";

function Building({name , isOn}){
    return (
        <div className="Building">
        <h1 className="Building title">{name}</h1>
        <p className="Power">{isOn ? "Power is Available" : "Power is not Available"}</p>
        <Floor1 isOn = {isOn} name = "Floor 1"/>
        <Floor1 isOn = {isOn} name = "Floor 2"/>
        <Floor1 isOn = {isOn} name = "Floor 3"/>
        
        </div>
    );
}

export default Building