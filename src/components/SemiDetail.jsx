import React from 'react'
import SemiDetailGrid from './SemiDetailGrid';
import {FaTemperatureHigh, FaWind} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi';
import {TbUvIndex} from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SemiDetail =()=>{

    const detail = useSelector(state => state.currentForecast.data);
    const todaysForecast = useSelector(state => state.todaysForecast.data);
    const currentForecast = useSelector(state => state.currentForecast.data);

    return(
        <>
            <div className='w-full'>
                <div className='w-full flex rounded-lg p-4 '>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between w-full mb-4'>
                            <p className='text-slate-400 font-semibold text-sm'>Air Conditions</p>
                            <Link to="/detailpage" state={{ todaysForecast: todaysForecast, currentForecast: currentForecast}}>
                                <button className='text-sm w-[80px] min-h-[0px] p-1 text-slate-200 rounded-2xl min-w-[0px]'>See more</button>
                            </Link>
                        </div>
                        <div className='grid grid-cols-2'>
                            <SemiDetailGrid icon={<FaTemperatureHigh />}
                            value={detail.current.feelslike_c >=10 ? detail.current.feelslike_c.toString().substring(0,2)
                                : detail.current.feelslike_c.toString().substring(0,1)
                            }
                            title="Real Feel"/>
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