import React from "react";
import {TiWeatherWindyCloudy, TiThList, TiBookmark, TiWeatherWindy} from 'react-icons/ti';
import {IoMdSettings} from 'react-icons/io';
import {RiAccountPinCircleFill} from 'react-icons/ri';

const Sidebar = () =>{
    return(
        <div className="flex w-full md:w-[10%] justify-center md:h-[100%] md:p-8 pt-4 pb-4 sm:flex-grow-0 min-w-[140px] max-h-[600px]">
            <div className="flex w-[90%] h-full bg-[#202B3B] rounded-2xl">
                <div className="flex md:flex-col flex-row w-full">
                    <TiWeatherWindy size={30} className="text-slate-500 self-center mt-6 mb-6 cursor-pointer"/>
                    <ul className="flex flex-row md:flex-col w-full justify-stretch text-slate-400">
                        <li className="flex flex-col my-4 w-full cursor-pointer p-2 hover:text-slate-200">
                            <TiWeatherWindyCloudy className="self-center"/>
                            <p className="md:text-md text-xs self-center">Weather</p>
                        </li>
                        <li className="flex flex-col my-4 cursor-pointer p-2 w-full hover:text-slate-200">
                            <TiThList className="self-center"/>
                            <p className="sm:text-sm text-xs self-center">Cities</p>
                        </li>
                        <li className="flex flex-col my-4 cursor-pointer p-2 w-full  hover:text-slate-200">
                            <TiBookmark  className="self-center"/>
                            <p className="sm:text-sm text-xs self-center">Favorites</p>
                        </li>
                        <li className="flex flex-col my-4 cursor-pointer p-2 w-full  hover:text-slate-200">
                            <IoMdSettings  className="self-center"/>
                            <p className="sm:text-sm text-xs self-center">Settings</p>
                        </li>
                        <li className="flex flex-col cursor-pointer p-2 w-full my-4 hover:text-slate-200">
                            <RiAccountPinCircleFill  className="self-center"/>
                            <p className="sm:text-sm text-xs self-center">Account</p>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}
export default Sidebar;