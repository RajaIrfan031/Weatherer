import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../redux/getFavoritesDataSlice';

const ShowList = ({title, list, selectedIndex})=>{

    const dispatch = useDispatch();
    const handleClick = (current) =>{
        dispatch(add(current));
    }

    return(
        <>
            <div className="my-4 text-slate-400">
                <h1 className="font-semibold">{title}</h1>
            </div>
            {
            Object(list).map(({name, region}, index)=>{
                return(
                <div key={index} onClick={()=>{handleClick(index)}}
                className={index !== selectedIndex ? "w-full h-20 rounded-lg bg-[#202B3B] p-8 my-2 hover:cursor-pointer hover:bg-[#0B131E] hover:border-[#202B3B] hover:border"
                    : "w-full h-20 rounded-lg p-8 my-2 cursor-pointer bg-[#0B131E] border-[#202B3B] border hover:bg-[#212935]"
            }>
                <p className="text-slate-300 font-semibold">{name}, {region}</p>
            </div>
            );
            })
            }
        </>
    )
}

export default ShowList;