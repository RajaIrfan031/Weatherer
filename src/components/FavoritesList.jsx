import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../redux/threeHoursSlice';

const FavoritesList = ({list})=>{

    const dispatch = useDispatch();
    const selectedIndex = useSelector(state => state.threeHours.index)
    const handleClick = (current) =>{
        dispatch(add(current));
    }

    return(
        <>
            <div className="my-4 text-slate-400">
                <h1 className="font-semibold">Favorite Cities</h1>
            </div>
            {
            list.map((location, index)=>{
                return(
                <div key={index} onClick={()=>{handleClick(index)}}
                className={index !== selectedIndex ? "w-full h-20 rounded-lg bg-[#202B3B] p-8 my-2 hover:cursor-pointer hover:bg-[#0B131E] hover:border-[#202B3B] hover:border"
                    : "w-full h-20 rounded-lg p-8 my-2 cursor-pointer bg-[#0B131E] border-[#202B3B] border hover:bg-[#212935]"
            }>
                <p className="text-slate-300 font-semibold">{location}</p>
            </div>
            );
            })
            }
        </>
    )
}

export default FavoritesList;