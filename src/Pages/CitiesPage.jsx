import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import Sidebar from "../components/Sidebar";
import CitiesList from "../components/CitiesList";
import City from '../components/City'

const CitiesPage = ()=>{ 

  const cities = [
    {
      id: 0,
      city: 'Manchester',
    },
    {
      id: 1,
      city: 'London',
    },
    {
      id: 2,
      city: 'Birmingham'
    },
    {
      id: 3,
      city: 'Liverpool'
    }
  ]

  return(
    <Provider store={store} >
      <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid md:grid-cols-6 md:grid-flow-col bg-[#0B131E]">
        <div className="col-span-1">
          <Sidebar isOn={2}/>
        </div>
        <div className="col-span-3 md:p-0 p-8 md:pt-8">
          <input className="p-2 bg-[#202B3B] w-full rounded-md text-slate-400" placeholder="Search for city"/>
          <CitiesList list={cities}/>
        </div>
        <div className="col-span-2 md:pt-8 flex justify-center h-60 pb-4">
          <div className="bg-[#202B3B] w-[80%] rounded-lg justify-center">
            <City />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default CitiesPage;