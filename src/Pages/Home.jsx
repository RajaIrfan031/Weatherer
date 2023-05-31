import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast"; 
import SevenDaysForecast from "../components/SevenDaysForecast";
import SemiDetail from "../components/SemiDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentForecast } from "../redux/currentForecastSlice";
import GetInput from "../components/search/GetInput";
import HomeCity from "../components/HomeCity";

const Home = ()=>{

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCurrentForecast("Manchester"))
  },[])

  const currentForecast = useSelector(state => state.currentForecast.data);

    return(
        <>
          <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid lg:grid-cols-7 md:grid-flow-col bg-[#0B131E] gap-2">
            <div className="col-span-1">
              <Sidebar isOn={1}/>
            </div>
            <div className="grid grid-flow-row col-span-4 md:p-0 p-8 md:pt-8">
              <GetInput />
              <HomeCity />
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