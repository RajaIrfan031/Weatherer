import React from 'react';
 
const City = ({locationData})=>{

      
      //const locationData = useSelector(state => state.currentForecast.data)


      return(
            <>
            <div className='grid grid-flow-row text-slate-200 h-full w-full grid-cols-5'>
                  <div className='flex flex-col p-4 sm:flex-auto sm:p-0 col-span-3 mt-10 ml-4'>
                        <h1 className='font-semibold text-xl'>{locationData.location.name}</h1>
                        <p className='text-xs text-slate-400 mt-1'>{locationData.location.region}</p>
                        <p className='text-xs text-slate-400 mt-1'>{locationData.location.country}</p>
                  {
                        locationData.current.temp_c !== undefined  ?
                        <h1 className='mt-4 text-4xl font-bold'>{locationData.current.temp_c}&#xb0;</h1>
                        :
                        <p>Loading...</p>
                  }
                  </div>
                  <div className='flex w-full h-full col-span-2 max-h-[160px]'>
                        <img width={160} src={locationData.current.condition.icon} alt=""/>
                  </div>
            </div>
            </>
      )
}

export default City;