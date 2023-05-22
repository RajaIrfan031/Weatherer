import React, { useEffect } from 'react';
import SemiDetail from './SemiDetail';
import { useDispatch, useSelector } from 'react-redux';
import GetCurrentDate from '../utils/GetCurrentDate';
import { fetchtodayForecast } from '../redux/todaysForecastSlice';

const FullDayForecast = ()=>{

      const dispatch = useDispatch();
      const forecastData = useSelector(state=> state.todaysForecast.data)

      useEffect(()=>{ 
            dispatch(fetchtodayForecast());
      },[]); 

      return(
            <>
                <div className='bg-[#202B3B] h-full w-full px-[2%] rounded-xl pt-6 text-slate-400 justify-center overflow-scroll'>
                <p className='font-semibold'>24 hrs Forecast</p>
                {
    Object.keys(forecastData).map((index)=>{
        return(
                <div key={index} className='flex flex-row w-full justify-between border-b py-4 border-b-slate-500 '>
                    <p className='text-base'>{forecastData[index].time.slice(-5)}</p> 
                    <div className='flex flex-row '>
                            <img src={forecastData[index].condition.icon} width={48} alt="" />
                            <p className='text-base mt-1'>{forecastData[index].condition.text}</p>
                    </div>
                    <div className='flex flex-row'>
                            <p className='font-semibold text-slate-300'>{
                            forecastData[index].day.maxtemp_c >=10 ? forecastData[index].day.maxtemp_c.toString().substring(0,2)
                            : forecastData[index].day.maxtemp_c.toString().substring(0,1)
                            }</p>
                            <p>&nbsp;/{
                            forecastData[index].day.mintemp_c >=10 ? forecastData[index].day.mintemp_c.toString().substring(0,2)
                            : forecastData[index].day.mintemp_c.toString().substring(0,1)
                            }</p>                          
                    </div>
                </div>
        )
                        })
                }
                </div> 
            </>
      )
}

export default FullDayForecast;