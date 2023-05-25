import React from "react";
import { useSelector } from "react-redux";

const TodayThreeHours = () =>{

    const data = useSelector(state => state.threeHours.data);

    return(
        <>
            <div className="text-slate-500 border-0 border-t-[1px] border-slate-500 mt-4 pt-2">
                {/* <pre>{JSON.stringify(citiesList[index].forecast.forecastday[0].hour, null, 2)}</pre> */}
                <p className="text-slate-500 font-semibold ">Today's Forecast</p>
                {/* <pre>{JSON.stringify(data.forecast.forecastday[0].hour, null, 2)}</pre> */}
                <div className="grid grid-flow-col mt-4 border-0 border-b-[1px] border-slate-700 pb-4">
                <p>hnn{ JSON.stringify(typeof data, null, 2)}</p>
                {/* {
                data.forecast.forecastday[0].hour.map(({time_epoch, time, temp_c, temp_f, is_day, condition, wind_mph, wind_kph, wind_degree, wind_dir, pressure_mb, pressure_in, precip_mm, precip_in, humidity, cloud, feelslike_c, feelslike_f, windchill_c, windchill_f, heatindex_c, heatindex_f, dewpoint_c, dewpoint_f, will_it_rain, chance_of_rain, will_it_snow, chance_of_snow, vis_km, vis_miles, gust_mph, gust_kph, uv})=>{
                        return(
                            <div>
                                {
                                    time === '2023-05-25 09:00' || time === '2023-05-25 12:00' || time === '2023-05-25 15:00' ? 
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
                    })
                } */}
                </div>
            </div>
        </>
    )
}

export default TodayThreeHours;