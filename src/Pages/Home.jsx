import React from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast";
import SemiDetail from "../components/SemiDetail";
import SevenDaysForecast from "../components/SevenDaysForecast";


const Home = ()=>{
    return(
        <>
            <div className="w-full h-full pb-8 bg-[#0B131E] md:flex md:flex-row">
              <div className="flex flex-auto bg-[#0B131E]">
                <Sidebar />
              </div>
              <div className="flex flex-col sm:p-8 sm:flex-auto bg-[#0B131E]">
                <City />
                <TodayForecast />
                <SemiDetail />
              </div>
              <div className="flex flex-auto">
                <SevenDaysForecast />
              </div>
            </div>
        </>
    )
}

export default Home;