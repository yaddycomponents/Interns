import { useState } from 'react';
import Building1 from './Building1'
import {createContext} from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { IntialPage } from './InitialPage';
const MainPowerContext = createContext();
export {MainPowerContext};
function MainPowerHouse(){
    const [isOn , setIsOn] = useState(false);
        return (
        <MainPowerContext.Provider value = {isOn}>
        <div className='Main'>
            <div>
                <h1 className='Building-title'>Main Power House</h1>,
                <button onClick={() => setIsOn(!isOn)} className={isOn ? 'ButtonOn' : 'ButtonOff'}>{isOn ? "MAIN POWER OFF" : "MAIN POWER ON"}</button>,
            </div>
            
            <Routes>
                <Route path = "/" element = {<IntialPage/>}/>
                <Route path = "/Building1" element = {<Building1 name="Building 1" />}/>
                <Route path = "/Building2" element = {<Building1 name="Building 2" />}/>
                <Route path = "/Building3" element = {<Building1 name="Building 3" />}/>
            </Routes>
        </div>
        </MainPowerContext.Provider>
    );
}
export default MainPowerHouse