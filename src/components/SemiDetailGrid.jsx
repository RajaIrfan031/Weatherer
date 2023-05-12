import React from 'react';

const SemiDetailGrid =({icon, value, title})=>{
    return(
        <>
            <div className='flex flex-row text-slate-300 mb-2'>
                <h1 className='text-2xl p-2'>{icon}</h1>
                <div className='flex flex-col'>
                    <h1 className='text-slate-400'>{title}</h1>
                    <h1 className='text-xl font-semibold'>{value}</h1>
                </div>
            </div>
        </>
    )
}

export default SemiDetailGrid;