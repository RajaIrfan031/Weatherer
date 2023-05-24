import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast"; 
import SevenDaysForecast from "../components/SevenDaysForecast";
import SemiDetail from "../components/SemiDetail";

const Home = ()=>{

  const [city, setCity] = useState('');
  const searchCity = (event)=>{
    if(event.key === 'Enter'){
      console.log(city);
    }
  }

    return(
        <>
            <div className="w-full h-full pb-8 bg-[#0B131E] md:flex md:flex-row min-h-screen">
              <div className="flex flex-auto bg-[#0B131E]">
                <Sidebar isOn={1} />
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
                <div className='flex h-full max-h-[368px] w-full mt-[4%] mr-4 justify-center min-w-[320px]'>
                      <div className='bg-[#202B3B] h-full w-full rounded-xl pt-6 text-slate-400 max-w-[360px]'>
                        <SemiDetail />
                        <SevenDaysForecast />
                      </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Home;