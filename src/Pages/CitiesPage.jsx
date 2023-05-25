import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import Sidebar from "../components/Sidebar";
import CitiesList from "../components/CitiesList";
import City from '../components/City'
import TodayThreeHours from "../components/TodayThreeHours";
import { fetchCitiesWeather } from "../redux/getCitiesSlice";

const CitiesPage = ()=>{ 

  const dispatch = useDispatch();
  const citiesList = useSelector(state => state.getCities.data)
  const data = useSelector(state => state.getCities.data);

  useEffect(()=>{
    dispatch(fetchCitiesWeather())
  },[]);

  
  return(
    <Provider store={store} >
      <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid md:grid-cols-6 md:grid-flow-col bg-[#0B131E]">
        <div className="col-span-1">
          <Sidebar isOn={2}/>
        </div>
        <div className="col-span-3 md:p-0 p-8 md:pt-8">
          <input className="p-2 bg-[#202B3B] w-full rounded-md text-slate-400" placeholder="Search for city"/>
          <CitiesList list={citiesList}/>
        </div>
        <div className="col-span-2 md:pt-8 flex justify-center h-60 pb-4">
          <div className="bg-[#202B3B] w-[80%] rounded-lg justify-center">
            <City />
            <TodayThreeHours />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default CitiesPage;