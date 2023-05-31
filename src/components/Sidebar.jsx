import React from "react";
import {TiWeatherWindyCloudy, TiThList, TiWeatherWindy} from 'react-icons/ti';
import {IoMdSettings} from 'react-icons/io'; 
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOn}) =>{

    const navigate = useNavigate();

    return(
        <div className="flex w-full md:w-[10%] justify-center items-stretch md:h-[100%] md:p-8 pt-4 pb-4 sm:flex-grow-0 min-w-[140px] max-h-[600px]">
            <div className="flex w-[90%] h-full bg-[#202B3B] rounded-2xl">
                <div className="flex md:flex-col flex-row w-full">
                    <TiWeatherWindy onClick={()=>{navigate('/home')}}  size={30} className="text-slate-500 self-center mt-6 mb-6 cursor-pointer"/>
                    <ul className="flex flex-row md:flex-col w-full justify-stretch text-slate-400">
                        <li onClick={()=>{navigate('/home')}} className={isOn === 1 ? "flex flex-col my-4 w-full cursor-pointer p-2 text-slate-200 hover:text-slate-400" : "flex flex-col my-4 w-full cursor-pointer p-2 hover:text-slate-400" }>
                            <TiWeatherWindyCloudy className="self-center"/>
                            <p className="font-semibold sm:text-sm text-xs self-center">Weather</p>
                        </li>
                        <li onClick={()=>navigate('/citiespage')} className={isOn === 2 ? "flex flex-col my-4 w-full cursor-pointer p-2 text-slate-200 hover:text-slate-400" : "flex flex-col my-4 w-full cursor-pointer p-2 hover:text-slate-400" }>
                            <TiThList className="self-center"/>
                            <p className="font-semibold sm:text-sm text-xs self-center">Cities</p>
                        </li>
                        <li onClick={()=>navigate('/favoritespage')} className={isOn === 3 ? "flex flex-col my-4 w-full cursor-pointer p-2 text-slate-200 hover:text-slate-400" : "flex flex-col my-4 w-full cursor-pointer p-2 hover:text-slate-400" }>
                            <TiThList className="self-center"/>
                            <p className="font-semibold sm:text-sm text-xs self-center">Favorites</p>
                        </li>
                        <li className={isOn === 4 ? "flex flex-col my-4 w-full cursor-pointer p-2 text-slate-200 hover:text-slate-400" : "flex flex-col my-4 w-full cursor-pointer p-2 hover:text-slate-400" }>
                            <IoMdSettings  className="self-center"/>
                            <p className="font-semibold sm:text-sm text-xs self-center">Settings</p>
                        </li> 
                    </ul>
                </div>
            </div> 
        </div>
    )
}
export default Sidebar;