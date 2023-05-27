import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { useLocation } from 'react-router-dom';

const FullDayForecast = ({todaysForecast})=>{
 
      return(
            <>
                <div className='bg-[#202B3B] h-full w-full rounded-xl pt-6 text-slate-400 justify-center overflow-y-scroll no-scrollbar pr-4'>
                <p className='font-semibold'>24 hrs Forecast</p> 
                {/* <pre>{JSON.stringify(todaysForecast, null, 2)}</pre> */}
                {
                Object.keys(todaysForecast).map((index)=>{
                        return(
                                <div key={index} className='flex flex-row w-full justify-between border-b py-4 border-b-slate-500 '>
                                        {/* {
                                                index==0 ? <pre>{todaysForecast[index]}</pre> : null
                                        } */}
                                <p className='text-base mt-3'>{todaysForecast[index].time.slice(-5)}</p> 
                                <div className='flex flex-row '>
                                        <img src={todaysForecast[index].condition.icon} width={48} alt="" />
                                        <p className='text-base mt-3'>{todaysForecast[index].chance_of_rain}%</p>
                                </div>
                                <div className='flex flex-row'>
                                        <p className='font-semibold text-slate-300 mt-3'>{
                                        todaysForecast[index].temp_c >=10 ? todaysForecast[index].temp_c.toString().substring(0,2)
                                        : todaysForecast[index].temp_c.toString().substring(0,1)
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