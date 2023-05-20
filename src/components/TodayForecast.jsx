import React, { useEffect } from 'react';
import {FaCloudMoonRain,} from 'react-icons/fa'
import {IoIosPartlySunny, IoMdSunny} from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { getTodaysForecast } from '../redux/todaysForecastSlice';

const TodayForecast = ()=>{
      
      const dispatch = useDispatch();

      useEffect(()=>{
            dispatch(getTodaysForecast());
      }, [])

      const forecast = [
            {
                  id: 0,
                  time: '6:00 AM',
                  temp: 14
            },
            {
                  id: 1,
                  time: '9:00 AM',
                  temp: 16
            },
            {
                  id: 2,
                  time: '12:00 PM',
                  temp: 19
            },
            {
                  id: 3,
                  time: '3:00 PM',
                  temp: 21
            },
            {
                  id: 4,
                  time: '6:00 PM',
                  temp: 20
            },
            {
                  id: 5,
                  time: '9:00 PM',
                  temp: 16
            },
            
      ]

      return(
            <>
            <div className='mb-4 mt-4 sm:w-full sm:pl-0 w-[95%] pl-[5%]'>
                  <div className='bg-[#202B3B] sm:pl-2 p-2 pt-4 w-full rounded-2xl min:w-[320px]'>
                        <h1 className='text-slate-500 text-sm font-medium mb-2'>Today's Forecast</h1>
                        <div className='grid grid-flow-row sm:grid-cols-6 grid-cols-2 w-full sm:gap-4'>
                        {
                        Object(forecast).map((item, index)=>{
                              return(
                                    <div key={index} className='p-0 sm:border-r border-r-slate-700 border-b sm:border-b-0 m-1 sm:m-0 text-slate-500 font-semibold justify-center sm:w-full'>
                                          <h1>{item.time}</h1>
                                          {
                                                item.temp <=15 ?
                                                <FaCloudMoonRain size={48} className='my-4'/> 
                                                : item.temp <=20 ?
                                                <IoIosPartlySunny size={48} className='my-4'/>
                                                :
                                                <IoMdSunny size={48} className='my-4'/>
                                          }
                                          
                                          <p className='font-bold text-slate-400 text-2xl'>{item.temp}&#xb0;</p>
                                    </div>
                              )
                        })
                        }
                        </div>
                  </div>
            </div>
            </>
      )
}

export default TodayForecast;