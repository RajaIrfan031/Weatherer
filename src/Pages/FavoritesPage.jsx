import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import Sidebar from "../components/Sidebar";
import CitiesList from "../components/CitiesList"; 
import TodayThreeHours from "../components/TodayThreeHours";
import { fetchCitiesWeather } from "../redux/getCitiesSlice";
import {add} from '../redux/threeHoursSlice'
import City from "../components/City";
import FavoritesList from "../components/FavoritesList";

const FavoritesPage = ()=>{ 

  const dispatch = useDispatch(); 
  const data = useSelector(state => state.getFavorites.data); 

  useEffect(()=>{ 
    dispatch(add(0))
    console.log("data: ", data);
  },[]); 
  
  return(
    <Provider store={store} >
      <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid md:grid-cols-6 md:grid-flow-col bg-[#0B131E] gap-4">
        <div className="col-span-1">
          <Sidebar isOn={3}/>
        </div>
        <div className="col-span-3 md:p-0 p-8 md:pt-8  max-h-[90%] overflow-scroll no-scrollbar">
          <input className="p-2 bg-[#202B3B] w-full rounded-md text-slate-400" placeholder="Search for city"/>
          <FavoritesList list={data}/>
        </div>
        <div className="col-span-2">
          <div className="pt-8 ">
          {/* <pre>sdaf{JSON.stringify(data,null, 2)}</pre> */}
            {/* <City locationData={data}/> */}
            {/* <TodayThreeHours /> */}
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default FavoritesPage;