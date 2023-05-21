import React from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import TodayForecast from "../components/TodayForecast";
import SemiDetail from "../components/SemiDetail";
import SevenDaysForecast from "../components/SevenDaysForecast";
import { Provider } from "react-redux";
import store from "../redux/store";

const Home = ()=>{
    return(
        <Provider store={store}>
            <div className="w-full h-full pb-8 bg-[#0B131E] md:flex md:flex-row min-h-screen">
              <div className="flex flex-auto bg-[#0B131E]">
                <Sidebar />
              </div>
              <div className="flex flex-col sm:p-8 sm:flex-auto bg-[#0B131E]">
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

export default Home;