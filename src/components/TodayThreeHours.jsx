import React from "react";
import { Link } from "react-router-dom";

const TodayThreeHours = ({data, index}) =>{ 
     
    return(
        <>
            <div className="text-slate-500 border-0 border-t-[1px] border-slate-500 mt-4 pt-2">
                <div className="flex flex-row w-full justify-between px-2 my-5">
                    <p className="text-slate-500 font-semibold ">Today's Forecast</p>
                {
                data[index] && data[index].forecast !== undefined ?
                <Link to="/detailpage" state={{todaysForecast: data[index].forecast.forecastday[0].hour, currentForecast: data[index]}}>
                    <button className='text-sm w-[80px] min-h-[0px] p-1 text-slate-200 rounded-2xl min-w-[0px]'>See more</button>
                </Link>
                : null
                }
                </div>
                <div className="grid grid-flow-col mt-4 border-0 border-b-[1px] border-slate-700 pb-4">
                {
                data[index] && data[index].forecast !== undefined ?
                data[index].forecast.forecastday[0].hour.map(({time_epoch, time, temp_c, temp_f, is_day, condition, wind_mph, wind_kph, wind_degree, wind_dir, pressure_mb, pressure_in, precip_mm, precip_in, humidity, cloud, feelslike_c, feelslike_f, windchill_c, windchill_f, heatindex_c, heatindex_f, dewpoint_c, dewpoint_f, will_it_rain, chance_of_rain, will_it_snow, chance_of_snow, vis_km, vis_miles, gust_mph, gust_kph, uv}, i)=>{
                    return(
                        <div key={i}>
                            {
                                time.slice(-5) === '09:00' || time.slice(-5) === '12:00' || time.slice(-5) === '15:00' ? 
                                <div className="grid grid-flow-col border-0 border-r-2 border-slate-700 mx-4">
                                    <div className="flex flex-col w-full items-center">
                                        <pre className="font-semibold text-slate-400">{time.slice(-5)}</pre>
                                        <img src={condition.icon} alt="" />
                                        <p className="font-semibold text-slate-300 text-xl">{temp_c.toString().substring(0,2)}</p>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    )
                }) : null
                }
                </div>
            </div>
        </>
    )
}

export default TodayThreeHours;