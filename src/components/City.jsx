import React from 'react';
import {TiWeatherPartlySunny} from 'react-icons/ti'

const City = ()=>{
      return(
            <>
            <div className='flex flex-row text-slate-200 w-full'>
                  <div className='flex-auto'>
                        <h1 className='font-bold text-3xl'>Manchester</h1>
                        <p className='text-xs text-slate-400 mt-1'>Chances of Rain: 24%</p>
                        <h1 className='mt-16 text-4xl font-bold'>19&#xb0;</h1>
                  </div>
                  <div className='flex flex-1 p-16'>
                        <TiWeatherPartlySunny size={48}/>
                  </div>
            </div>
            </>
      )
}

export default City;