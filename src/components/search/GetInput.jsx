import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetInput =  () => {
 
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const handleSearch = (event)=>{
        if(event.key === 'Enter' && event.target.value.length >0) {
            navigate('/searchpage', {state: {searchValue: event.target.value}})
        }
    }

    return(
        <>
        <div>
            <input
            className="p-4 bg-[#202B3B] w-full rounded-md text-slate-400 h-8"
            placeholder="Search for city" 
            value={searchValue}
            onChange={(val)=>{setSearchValue(val.target.value)}}
            onKeyDown={(event)=>{handleSearch(event)}}
            />
        </div>
        </>
    )
}

export default GetInput;