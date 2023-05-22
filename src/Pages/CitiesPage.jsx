import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast"; 
import SevenDaysForecast from "../components/SevenDaysForecast";
import { Provider } from "react-redux";
import store from "../redux/store";

const CitiesPage = ()=>{

  const [city, setCity] = useState('');
  const searchCity = (event)=>{
    if(event.key === 'Enter'){
      
    }
  }


    return(
        <Provider store={store}>
            <div className="w-full h-full pb-8 bg-[#0B131E] md:flex md:flex-row min-h-screen">
              <div className="flex flex-auto bg-[#0B131E]">
                <Sidebar />
              </div>
              <div className="flex flex-col sm:p-8 sm:flex-auto bg-[#0B131E]">
                <div className="w-full my-2">
                  <input
                  type="text" 
                  placeholder="Enter city" 
                  className="rounded-sm w-full bg-[#202B3B] p-1 border-none focus:outline-none text-slate-300"
                  onChange={e => setCity(e.target.value)}
                  onKeyDown={(event)=>{searchCity(event)}}
                  />
                </div>
                <City />
                <TodayForecast /> 
              </div>
              <div className="flex flex-auto">
                <SevenDaysForecast />
              </div>
            </div>
        </Provider>
    )
}

export default CitiesPage;