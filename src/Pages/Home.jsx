import React, { useDebugValue, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast"; 
import SevenDaysForecast from "../components/SevenDaysForecast";
import SemiDetail from "../components/SemiDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentForecast } from "../redux/currentForecastSlice";

const Home = ()=>{

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCurrentForecast())
  },[])

  const currentForecast = useSelector(state => state.currentForecast.data);

  const [city, setCity] = useState('');
  const searchCity = (event)=>{
    if(event.key === 'Enter'){
      console.log(city);
    }
  }

    return(
        <>
          <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid md:grid-cols-6 md:grid-flow-col bg-[#0B131E] gap-2">
            <div className="col-span-1">
              <Sidebar isOn={1}/>
            </div>
            <div className="grid grid-flow-row col-span-3 md:p-0 p-8 md:pt-8">
              <input className="p-4 bg-[#202B3B] w-full rounded-md text-slate-400 h-8" placeholder="Search for city"/>
              <City locationData={currentForecast}/>
              <TodayForecast /> 
            </div>
            <div className="grid grid-flow-row h-[90%] col-span-2 my-8 rounded-lg mr-4 min-w-full p-4">
              <div className="bg-[#202B3B] rounded-lg w-full">
                <SemiDetail />
                <SevenDaysForecast />
              </div>
              </div>
          </div>
        </>
    )
}

export default Home;