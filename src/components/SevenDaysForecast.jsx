import React from 'react';
import GetCurrentDate from '../utils/GetCurrentDate';

const SevenDaysForecast = ({forecastData})=>{

      return(
            <>
            <div className='flex flex-col w-full px-[2%] rounded-xl text-slate-400 justify-center'>
            <p className='font-semibold'>3-Days Forecast</p> 
            <div className=' w-[80%]'>
            {
            forecastData.map((forecast, index)=>{
                  return(
                        <div key={index} className='flex flex-row w-full justify-between border-b py-4 border-b-slate-500'>
                              {
                                    GetCurrentDate.TodayDate !== forecast.date ? 
                                    <p className='text-sm mt-2'>{forecast.date}</p> 
                                    :
                                    <p className='text-base mt-2'>Today</p> 
                              }
                              <div className='flex flex-row '>
                                    <img src={forecast.day.condition.icon} width={36} alt="" />
                                    <p className='text-base mt-1 ml-1'>{forecast.day.daily_chance_of_rain}%</p>
                              </div>
                              <div className='flex flex-row'>
                                    <p className='font-semibold text-slate-300 mt-2'>{
                                    forecast.day.maxtemp_c >=10 ? forecast.day.maxtemp_c.toString().substring(0,2)
                                    : forecast.day.maxtemp_c.toString().substring(0,1)
                                    }</p>
                                    <p className=' text-slate-300 mt-2 mr-4'>&nbsp;/{
                                    forecast.day.mintemp_c >=10 ? forecast.day.mintemp_c.toString().substring(0,2)
                                    : forecast.day.mintemp_c.toString().substring(0,1)
                                    }</p>                          
                              </div>
                        </div>
                  )
            })
      }
            </div>
      </div> 
            </>
      )
}

export default SevenDaysForecast;