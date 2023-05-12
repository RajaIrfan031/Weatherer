import React from 'react'
import SemiDetailGrid from './SemiDetailGrid';
import {FaTemperatureHigh, FaWind} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi';
import {TbUvIndex} from 'react-icons/tb';

const SemiDetail =()=>{

    const detail = [
        {
            title: 'Real feel',
            icon: FaTemperatureHigh,
            value: '20'
        },
        {
            title: 'Wind',
            icon: FaWind,
            value: '5 km/h'
        },
        {
            title: 'Chance of rain',
            icon: WiHumidity,
            value: '24%'
        },
        {
            title: 'UV Index',
            icon: TbUvIndex,
            value: '4'
        },
    ]

    return(
        <>
            <div className='w-full p-8 sm:p-0'>
                <div className='w-full flex rounded-lg p-4 bg-[#202B3B]'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between w-full'>
                            <p className='text-slate-400 font-semibold text-sm'>Air Conditions</p>
                            <button className='text-sm w-[80px] min-h-[0px] p-1 text-slate-200 rounded-2xl min-w-[0px]'>See more</button>
                        </div>
                        <div className='grid grid-cols-2'>
                        {
                            detail.map((grid,index)=>{
                                return(
                                <SemiDetailGrid key={index} icon={<grid.icon />} value={grid.value} title={grid.title}/>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SemiDetail;