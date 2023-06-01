import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast"; 
import SevenDaysForecast from "../components/SevenDaysForecast";
import SemiDetail from "../components/SemiDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentForecast } from "../redux/currentForecastSlice";
import { fetchtodayForecast } from '../redux/todaysForecastSlice';
import GetInput from "../components/search/GetInput";
import StatusCode from "../utils/StatusCode";
import { fetchThreeDaysForecast } from "../redux/threeDaysForecastSlice";

const Home = ()=>{

  const forecastData = useSelector(state => state.threeDaysForecast.data);
  const forecastDataStatus = useSelector(state => state.threeDaysForecast.status);
  const currentForecast = useSelector(state => state.currentForecast.data);
  const currentForecastStatus = useSelector(state => state.currentForecast.status);
  const todayData = useSelector(state => state.todaysForecast.data);
  const todayDataStatus = useSelector(state => state.todaysForecast.status);
  const [getLocationStatus, setGetLocationStatus] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    handleGetLocation(); 
  },[])

  
  function handleGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation not supported");
    }
  }

  function success(position) { 
    setGetLocationStatus(false);
    dispatch(getCurrentForecast(`${position.coords.latitude},${position.coords.longitude}`));
    dispatch(fetchtodayForecast(`${position.coords.latitude},${position.coords.longitude}`));
    dispatch(fetchThreeDaysForecast(`${position.coords.latitude},${position.coords.longitude}`));
  }

  function error() {
    setGetLocationStatus(false);
    dispatch(getCurrentForecast("Manchester"))
    dispatch(fetchtodayForecast("Manchester"));
    dispatch(fetchThreeDaysForecast("Manchester"));
  }

  if(getLocationStatus === true){
    return(      
    <div role="status" className="flex w-full h-screen align-middle items-center justify-center bg-[#0B131E]">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
    )
  }
  
    return(
        <>
          <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid lg:grid-cols-7 md:grid-flow-col bg-[#0B131E] gap-2">
            <div className="col-span-1">
              <Sidebar isOn={1}/>
            </div>
            <div className="grid grid-flow-row col-span-4 md:p-0 p-8 md:pt-8">
              <GetInput />
              {
              currentForecastStatus === StatusCode.LOADING ? 
              <p className="text-slate-300">Loading</p>
              : currentForecastStatus === StatusCode.IDLE ?
              <City locationData={currentForecast}/> 
              : currentForecastStatus === StatusCode.ERROR ?
              <p className="text-slate-300">Something Went Wrong</p>
              : null
              }
              {
              todayDataStatus === StatusCode.LOADING ? 
              <p className="text-slate-300">Loading</p>
              : todayDataStatus === StatusCode.IDLE ?
              <TodayForecast todayData={todayData}/> 
              : todayDataStatus === StatusCode.ERROR ?
              <p className="text-slate-300">Something Went Wrong</p>
              : null
              }
            </div>
            <div className="grid grid-flow-row h-[90%] col-span-2 my-8 rounded-lg mr-4 min-w-full p-4">
              <div className="bg-[#202B3B] rounded-lg w-full">
                <SemiDetail detail={currentForecast} todaysForecast={todayData}/>
                {
                forecastDataStatus === StatusCode.LOADING ? 
                <p className="text-slate-300">Loading</p>
                : forecastDataStatus === StatusCode.IDLE ?
                <SevenDaysForecast forecastData={forecastData}/>
                : forecastDataStatus === StatusCode.ERROR ?
                <p className="text-slate-300">Something Went Wrong</p>
                : null
                } 
              </div>
              </div>
          </div>
        </>
    )
}

export default Home;