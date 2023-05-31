import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchtodayForecast } from "../../redux/todaysForecastSlice";
import { useNavigate } from "react-router-dom";
import { getCurrentForecast } from "../../redux/currentForecastSlice";

const Results = ({title, list, selectedIndex})=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todaysForecast = useSelector(state=> state.todaysForecast.data);
    const currentForecast = useSelector(state => state.currentForecast.data);

    const handleClick = async (data) =>{
        // console.log("tbc.", data.forecast);
        // dispatch(fetchtodayForecast(current));
        // dispatch(getCurrentForecast(current));
        navigate('/detailpage', {state:{ todaysForecast: data.forecast.forecastday[0].hour, currentForecast: {current: data.current, location: data.location}}})
    }

return(
    <>
        <div className="my-4 text-slate-400">
            <h1 className="font-semibold">{title}</h1>
        </div>
        {
        Object(list).map((city, index)=>{
        return(
            <div key={index} onClick={()=>{handleClick(city)}} className="w-full h-20 rounded-lg bg-[#202B3B] p-8 my-2 hover:cursor-pointer hover:bg-[#0B131E] hover:border-[#202B3B] hover:border">
            <p className="text-slate-300 font-semibold">{city.location.name}, {city.location.region}</p>
        </div>
        );
        })
        }
    </>
    )
}

export default Results;