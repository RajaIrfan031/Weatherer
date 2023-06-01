import React from 'react';
import GetCurrentTime from '../utils/GetCurrentTime';

const TodayForecast = ({todayData})=>{
      
      const time = parseInt(GetCurrentTime.Time);
      const maxTime = parseInt(GetCurrentTime.Time) +5;

      return(
            <>
            <div className='mb-4 mt-4 sm:w-full sm:pl-0 w-[95%] pl-[5%]'>
                  <div className='bg-[#202B3B] sm:pl-2 p-2 pt-4 w-full rounded-2xl min:w-[320px]'>
                        <h1 className='text-slate-500 text-sm font-medium mb-2'>Today's Forecast</h1>
                        <div className='grid grid-flow-row sm:grid-cols-6 grid-cols-2 w-full sm:gap-4'>
                        { 
                        Object.keys(todayData).map((index)=>{
                              return(
                              index >=time && index <= maxTime && index<=23 ?
                                    <div key={index} className='p-0 sm:border-r border-r-slate-700 border-b sm:border-b-0 m-1 sm:m-0 text-slate-500 font-semibold justify-center sm:w-full'>
                                          <h1>{todayData[index].time.slice(-5)}</h1>
                                          <img src={todayData[index].condition.icon} alt="" />
                                          <p className='font-bold text-slate-400 text-2xl'>{
                                          todayData[index].temp_c >=10 ? todayData[index].temp_c.toString().substring(0,2)
                                          : todayData[index].temp_c.toString().substring(0,1)
                                          }&#xb0;</p>
                                    </div>
                              :
                              null
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