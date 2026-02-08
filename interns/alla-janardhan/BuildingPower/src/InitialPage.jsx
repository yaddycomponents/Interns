import { useNavigate } from "react-router-dom";
export function IntialPage(){
     const navigate = useNavigate();
    return(
        <div className="InitialPage">
            <button onClick={()=>{navigate("/Building1")}} className="Button">Building 1</button>
            <button onClick={()=>{navigate("/Building2")}} className="Button">Building 2</button>
            <button onClick={()=>{navigate("/Building3")}} className="Button">Building 3</button>
        </div>
    );
}