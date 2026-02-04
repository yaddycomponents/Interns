import { useState } from 'react';
import Building1 from './Building1'
function MainPowerHouse(){
    const [isOn , setIsOn] = useState(false);
        return (
        <div className='Main'>
            <div>
                <h1 className='Building-title'>Main Power House</h1>,
                <button onClick={() => setIsOn(!isOn)} className={isOn ? 'ButtonOn' : 'ButtonOff'}>{isOn ? "MAIN POWER OFF" : "MAIN POWER ON"}</button>,
            </div>
            <div className='Buildings'>
                <Building1 name="Building 1" isOn = {isOn}/>
                <Building1 name="Building 2" isOn = {isOn}/>
                <Building1 name="Building 3" isOn = {isOn}/>
            </div>
        </div>
    );
}
export default MainPowerHouse