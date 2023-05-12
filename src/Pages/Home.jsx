import React from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast";
import SemiDetail from "../components/SemiDetail";

const Home = ()=>{
    return(
        <>
            <div className="w-screen h-screen bg-[#0B131E] sm:flex sm:flex-row">
              <Sidebar/>
              <div className="flex flex-col sm:p-8 sm:flex-auto bg-[#0B131E]">
                <City />
                <TodayForecast />
                <SemiDetail />
              </div>  
            </div>
        </>
    )
}

export default Home;