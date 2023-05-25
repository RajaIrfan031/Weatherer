import React from "react";
import { useDispatch } from "react-redux";
import {add} from '../redux/threeHoursSlice';

const CitiesList = ({list})=>{

    const dispatch = useDispatch();
    const handleClick = (current) =>{
        dispatch(add(current));
    }

    return(
        <>
            <div className="my-4 text-slate-400">
                <h1 className="font-semibold">Top Cities</h1>
            </div>
            {
                list.map((location)=>{
                    return(
                    <div onClick={()=>{handleClick(location)}} className="w-full h-20 rounded-lg bg-[#202B3B] p-8 my-2 hover:cursor-pointer hover:bg-[#0B131E] hover:border-[#202B3B] hover:border">
                        {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
                        <p className="text-slate-300 font-semibold">{location.location.name}</p>
                    </div>
                    );
                })
            }
        </>
    )
}

export default CitiesList;