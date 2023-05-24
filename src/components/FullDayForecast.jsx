import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { useLocation } from 'react-router-dom';

const FullDayForecast = ()=>{

      const dispatch = useDispatch();
      const forecastData = useSelector(state=> state.todaysForecast.data);
      const location = useLocation();
      const {todaysForecast} = location.state !== null ? location.state : '';

      useEffect(()=>{ 
        //     dispatch(fetchtodayForecast());
      },[]); 

      return(
            <>
                <div className='bg-[#202B3B] h-full w-full rounded-xl pt-6 text-slate-400 justify-center overflow-y-scroll no-scrollbar pr-4'>
                <p className='font-semibold'>24 hrs Forecast</p> 
                {
                Object.keys(todaysForecast).map((index)=>{
                        return(
                                <div key={index} className='flex flex-row w-full justify-between border-b py-4 border-b-slate-500 '>
                                        {/* {
                                                index==0 ? <pre>{forecastData[index]}</pre> : null
                                        } */}
                                <p className='text-base mt-3'>{forecastData[index].time.slice(-5)}</p> 
                                <div className='flex flex-row '>
                                        <img src={forecastData[index].condition.icon} width={48} alt="" />
                                        <p className='text-base mt-3'>{forecastData[index].chance_of_rain}%</p>
                                </div>
                                <div className='flex flex-row'>
                                        <p className='font-semibold text-slate-300 mt-3'>{
                                        forecastData[index].temp_c >=10 ? forecastData[index].temp_c.toString().substring(0,2)
                                        : forecastData[index].temp_c.toString().substring(0,1)
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