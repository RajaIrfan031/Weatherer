import React, { useEffect } from 'react';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentForecast } from '../redux/currentForecastSlice'; 

const City = ()=>{

      const dispatch = useDispatch();

      useEffect(()=>{
            dispatch(getCurrentForecast());
      },[])

      const locationData = useSelector(state => state.currentForecast.data)

      return(
            <>
            <div className='flex flex-row text-slate-200 w-[90%]'>
                  <div className='sm:flex-auto p-4 sm:p-0'>
                        <h1 className='font-bold text-3xl'>{locationData.location.name}</h1>
                        <p className='text-xs text-slate-400 mt-1'>{locationData.location.region}</p>
                        <p className='text-xs text-slate-400 mt-1'>{locationData.location.country}</p>
                        <h1 className='mt-4 text-4xl font-bold'>{locationData.current.temp_c}&#xb0;</h1>
                  </div>
                  <div className='flex flex-col flex-1 sm:p-16 w-full h-full justify-center align-middle'>
                        <img src={locationData.current.condition.icon} alt=""/>
                  </div>
            </div>
            </>
      )
}

export default City;