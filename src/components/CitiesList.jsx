import React from "react";

const CitiesList = ({list})=>{

    const handleClick = (id) =>{
        console.log(id);
    }
    
    return(
        <>
            <div className="my-4 text-slate-400">
                <h1 className="font-semibold">Top Cities</h1>
            </div>
            {
                list.map(({id, city})=>{
                    return(
                    <div onClick={()=>{handleClick(id)}} key={id} className="w-full h-20 rounded-lg bg-[#202B3B] p-8 my-2 hover:cursor-pointer hover:bg-[#0B131E] hover:border-[#202B3B] hover:border">
                        <p className="text-slate-300 font-semibold">{city}</p>
                    </div>
                    );
                })
            }
        </>
    )
}

export default CitiesList;