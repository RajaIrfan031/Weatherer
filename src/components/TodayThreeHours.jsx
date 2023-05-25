import React from "react";
import { useSelector } from "react-redux";

const TodayThreeHours = () =>{

    const citiesList = useSelector(state => state.getCities.data)
    const index = useSelector(state => state.threeHours.index);

    return(
        <>
            <div className="text-slate-300">
                {/* <pre>{JSON.stringify(citiesList[index].forecast.forecastday[0].hour, null, 2)}</pre> */}
                {
                    citiesList[index].forecast.forecastday[0].hour.map(({time_epoch, time, temp_c, temp_f, is_day, condition, wind_mph, wind_kph, wind_degree, wind_dir, pressure_mb, pressure_in, precip_mm, precip_in, humidity, cloud, feelslike_c, feelslike_f, windchill_c, windchill_f, heatindex_c, heatindex_f, dewpoint_c, dewpoint_f, will_it_rain, chance_of_rain, will_it_snow, chance_of_snow, vis_km, vis_miles, gust_mph, gust_kph, uv})=>{
                        return(
                            <div>
                                {
                                    time === '2023-05-25 09:00' || time === '2023-05-25 12:00' || time === '2023-05-25 15:00' ? 
                                    <pre>{time}</pre>
                                    : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodayThreeHours;