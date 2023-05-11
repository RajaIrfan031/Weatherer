import React from 'react';
import {FaCloudMoonRain,} from 'react-icons/fa'
import {IoIosPartlySunny, IoMdSunny} from 'react-icons/io'

const TodayForecast = ()=>{

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
            <div className='h-full mx-4 mt-4 '>
                  <div className='bg-[#202B3B] pl-8 pt-4 sm:w-full rounded-2xl w-[120px]'>
                        <h1 className='text-slate-500 text-sm font-medium'>Today's Forecast</h1>
                        <div className='sm:flex sm:flex-row sm:w-full sm:justify-between sm:items-center '>
                        {
                        Object(forecast).map((item, index)=>{
                              return(
                                    <div className='p-4 border-r border-r-slate-700 text-slate-500 font-semibold justify-center sm:w-full'>
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