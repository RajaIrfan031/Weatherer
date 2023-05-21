import React, { useEffect } from 'react';
import SemiDetail from './SemiDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreeDaysForecast } from '../redux/threeDaysForecastSlice';
import GetCurrentDate from '../utils/GetCurrentDate';

const SevenDaysForecast = ()=>{

      const dispatch = useDispatch();
      const forecastData = useSelector(state => state.threeDaysForecast.data);

      useEffect(()=>{ 
            dispatch(fetchThreeDaysForecast());
      },[]);

      const data =[
            {
                  day: 'Mon',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
            {
                  day: 'Tue',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
            {
                  day: 'Wed',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
      ]

      return(
            <>
            <div className='flex h-full max-h-[368px] w-full mt-[4%] mr-4 justify-center min-w-[320px]'>
                  <div className='bg-[#202B3B] h-full w-full rounded-xl pt-6 text-slate-400 max-w-[360px]'>
                        <SemiDetail />
                        <div className='bg-[#202B3B] h-full w-full px-[2%] rounded-xl pt-6 text-slate-400 justify-center'>
                        <p className='font-semibold'>3-Days Forecast</p>
                        {
                              forecastData.map((forecast, index)=>{
                                    return(
                                          <div key={index} className='flex flex-row w-full justify-between border-b py-4 border-b-slate-500'>
                                                {/* <pre>{JSON.stringify(forecast, null, 2)}</pre> */}
                                                {
                                                      GetCurrentDate.TodayDate !== forecast.date ? 
                                                      <p className='text-sm'>{forecast.date}</p> 
                                                      :
                                                      <p className='text-base'>Today</p> 
                                                }
                                                <div className='flex flex-row '>
                                                      <img src={forecast.day.condition.icon} width={36} alt="" />
                                                      <p className='text-base mt-1'>{forecast.day.condition.text}</p>
                                                </div>
                                                <div className='flex flex-row'>
                                                      <p className='font-semibold text-slate-300'>{forecast.day.maxtemp_c}</p>
                                                      <p>&nbsp;/{forecast.day.mintemp_c}</p>                                                      
                                                </div>
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

export default SevenDaysForecast;