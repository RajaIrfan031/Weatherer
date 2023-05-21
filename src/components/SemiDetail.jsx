import React from 'react'
import SemiDetailGrid from './SemiDetailGrid';
import {FaTemperatureHigh, FaWind} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi';
import {TbUvIndex} from 'react-icons/tb';
import { useSelector } from 'react-redux';

const SemiDetail =()=>{

    const detail = useSelector(state => state.currentForecast.data);
 

    return(
        <>
            <div className='w-full p-8 sm:p-0'>
                <div className='w-full flex rounded-lg p-4 bg-[#202B3B]'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between w-full mb-4'>
                            <p className='text-slate-400 font-semibold text-sm'>Air Conditions</p>
                            <button className='text-sm w-[80px] min-h-[0px] p-1 text-slate-200 rounded-2xl min-w-[0px]'>See more</button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <SemiDetailGrid icon={<FaTemperatureHigh />} value={detail.current.feelslike_c} title="Real Feel"/>
                            <SemiDetailGrid icon={<FaWind />} value={detail.current.wind_kph} title="Wind"/>
                            <SemiDetailGrid icon={<WiHumidity />} value={detail.current.humidity} title="Humidity"/>
                            <SemiDetailGrid icon={<TbUvIndex />} value={detail.current.uv} title="UV Index"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SemiDetail;