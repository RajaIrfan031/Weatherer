import React from 'react';

const SevenDaysForecast = ()=>{

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
            {
                  day: 'Thu',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
            {
                  day: 'Fri',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
            {
                  day: 'Sat',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
            {
                  day: 'Sun',
                  forecast: 'Sunny',
                  temp: '23/17'
            },
      ]

      return(
            <>
            <div className='flex h-full max-h-[768px] w-full mt-[4%] justify-center min-w-[320px]'>
                  <div className='bg-[#202B3B] w-[80%] h-full rounded-xl pt-6 pl-6 text-slate-400'>
                        <p className='font-semibold'>7-Days Forecast</p>
                        {
                              data.map((list, index)=>{
                                    return(
                                          <div key={index} className='flex flex-row justify-between pr-4 my-8 border-b pb-4'>
                                                <p className='text-slate-500'>{list.day}</p>
                                                <p className='text-slate-500'>{list.forecast}</p>
                                                <p className='text-slate-500'>{list.temp}</p>
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