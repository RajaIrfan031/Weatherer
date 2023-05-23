import React from "react";
import {FaTemperatureHigh, FaWind} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi';
import {TbUvIndex} from 'react-icons/tb';

const TodayDetailedView = ({currentForecast})=>{

    return(
        <>
            <div className="w-full h-full text-slate-300 p-4 sm:px-0 pt-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#202B3B] rounded-lg p-4 flex flex-row gap-2">
                        <div className="flex h-full items-center text-xl text-slate-400">
                            <FaTemperatureHigh />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-slate-400 uppercase">Feels like</h1>
                            <p className="font-bold text-xl text-slate-300">{currentForecast.current.feelslike_c}</p>
                        </div>
                    </div>
                    <div className="bg-[#202B3B] rounded-lg p-4 flex flex-row gap-2">
                        <div className="flex h-full items-center text-xl text-slate-400">
                            <TbUvIndex />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-slate-400 uppercase">UV Index</h1>
                            <p className="font-bold text-xl text-slate-300">{currentForecast.current.uv}</p>
                        </div>
                    </div>
                    <div className="bg-[#202B3B] rounded-lg p-4 flex flex-row gap-2">
                        <div className="flex h-full items-center text-xl text-slate-400">
                            <FaWind />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-slate-400 uppercase">Wind</h1>
                            <p className="font-bold text-xl text-slate-300">{currentForecast.current.wind_kph} km/h</p>
                        </div>
                    </div>
                    <div className="bg-[#202B3B] rounded-lg p-4 flex flex-row gap-2">
                        <div className="flex h-full items-center text-2xl text-slate-400">
                            <WiHumidity />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-slate-400 uppercase">Humidity</h1>
                            <p className="font-bold text-xl text-slate-300">{currentForecast.current.humidity}%</p>
                        </div>
                    </div>
                    <div className="bg-[#202B3B] rounded-lg p-4 flex flex-row gap-2">
                        <div className="flex h-full items-center text-xl text-slate-400">
                            <FaWind />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-slate-400 uppercase">Visibility</h1>
                            <p className="font-bold text-xl text-slate-300">{currentForecast.current.vis_km} km</p>
                        </div>
                    </div>
                    <div className="bg-[#202B3B] rounded-lg p-4 flex flex-row gap-2">
                        <div className="flex h-full items-center text-xl text-slate-400">
                            <FaWind />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-slate-400 uppercase">Condition</h1>
                            <p className="font-bold text-xl text-slate-300">{currentForecast.current.condition.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayDetailedView;