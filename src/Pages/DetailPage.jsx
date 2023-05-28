import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import FullDayForecast from "../components/FullDayForecast";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import TodayDetailedView from "../components/TodayDetailedView";
import { Link, useLocation } from "react-router-dom";
import { add, remove } from "../redux/favoritesSlice";

const DetailPage = ()=>{

  const location = useLocation();
  const { currentForecast } = location.state !== undefined ? location.state : 'undefined';
  const {todaysForecast} = location.state !== undefined ? location.state : 'undefined';
  const [isFavorite, setIsFavorite] = useState(false);
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  
  useEffect(()=>{
    checkAdded()
    }, [])

  const checkAdded = () =>{
    const added = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : []
    let isAdded = added.find(city => city.name === currentForecast.location.name);
    if(isAdded !== undefined){
      console.log("is added ");
      setIsFavorite(true);
    }
    else {
      setIsFavorite(false)
    }
  }
  
  const searchCity = (event)=>{
    if(event.key === 'Enter'){
      console.log(city);
    }
  }

  const addToFavorites = (favorite) =>{
    dispatch(add(favorite));
    checkAdded();
  }

  const removeFromFavorites =(favorite) =>{
    dispatch(remove(favorite));
    console.log("faovriets");
    checkAdded()
  }
    return(
        <Provider store={store}>
            <div className="w-full h-full pb-8 bg-[#0B131E] md:flex md:flex-row min-h-screen"> 
              <div className="flex flex-auto bg-[#0B131E]">
                <Sidebar isOn={0}/>
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
                <City locationData={currentForecast}/>
                <div>
                {
                  isFavorite ===true ? 
                  <button onClick={()=>{removeFromFavorites(currentForecast.location.name)}} className='text-sm font-xl text-slate-200'>Remove from favorites</button>
                  :
                  <button onClick={()=>{addToFavorites({name: currentForecast.location.name})}} className='text-sm font-xl text-slate-200'>Add to favorite</button>
                }
                </div>
                 <TodayDetailedView currentForecast={currentForecast}/>
              </div>
              <div className="flex flex-auto bg-[#0B131E]">
              <div className='flex h-full max-h-screen w-full mt-[4%] mr-4 justify-center min-w-[320px]'>
                <div className='bg-[#202B3B] h-[90%] w-full rounded-xl pt-6 text-slate-400 max-w-[360px] pl-4 ml-4 sm:ml-0 overflow-hidden'>
                  <FullDayForecast todaysForecast={todaysForecast}/>
                </div>
              </div>
              </div>
            </div>
        </Provider>
    )
}

export default DetailPage;