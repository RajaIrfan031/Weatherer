import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import City from "../components/City";
import FullDayForecast from "../components/FullDayForecast";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import TodayDetailedView from "../components/TodayDetailedView";
import { useLocation } from "react-router-dom";
import { add, remove } from "../redux/favoritesSlice";
import GetInput from '../components/search/GetInput';

const DetailPage = ()=>{

  const location = useLocation();
  const { currentForecast } = location.state !== undefined ? location.state : 'undefined';
  const {todaysForecast} = location.state !== undefined ? location.state : 'undefined';
  const [isFavorite, setIsFavorite] = useState(false); 
  const dispatch = useDispatch();
  
  useEffect(()=>{
    checkAdded()
    }, [])

  const checkAdded = () =>{
    const added = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : []
    let isAdded = added.find(city => (city.region === currentForecast.location.region && city.name === currentForecast.location.name));
    if(isAdded !== undefined){ 
      setIsFavorite(true);
    }
    else {
      setIsFavorite(false)
    }
  } 

  const addToFavorites = (favorite) =>{
    console.log("add following: ", favorite);
    dispatch(add(favorite));
    checkAdded();
  }

  const removeFromFavorites =(favorite) =>{
    dispatch(remove(favorite)); 
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
                <GetInput />
                </div>
                <City locationData={currentForecast}/>
                <div>
                {
                  isFavorite ===true ? 
                  <button onClick={()=>{removeFromFavorites(currentForecast.location.name)}} className='text-sm font-xl text-slate-200'>Remove from favorites</button>
                  :
                  <button onClick={()=>{addToFavorites({name: currentForecast.location.name, region: currentForecast.location.region})}} className='text-sm font-xl text-slate-200'>Add to favorite</button>
                }
                </div>
                 <TodayDetailedView currentForecast={currentForecast}/>
              </div>
              <div className="flex flex-auto bg-[#0B131E]">
              <div className='flex h-full max-h-screen w-full mt-[4%] mr-4 justify-center min-w-[320px]'>
                <div className='bg-[#202B3B] h-[90%] w-full rounded-xl pt-6 text-slate-400 max-w-[360px] pl-4 ml-4 sm:ml-0'>
                  <FullDayForecast todaysForecast={todaysForecast}/>
                </div>
              </div>
              </div>
            </div>
        </Provider>
    )
}

export default DetailPage;