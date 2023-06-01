import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Sidebar from "../components/Sidebar";
import GetInput from "../components/search/GetInput";

const SettingsPage = () =>{

    return(
        <Provider store={store} >
          <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid md:grid-cols-6 md:grid-flow-col bg-[#0B131E] gap-4">
            <div className="col-span-1">
              <Sidebar isOn={4}/>
            </div>
            <div className="col-span-3 md:p-1 p-8 md:pt-8  max-h-[90%] overflow-scroll no-scrollbar">  
              <GetInput />
              <div className="flex flex-col w-full h-full items-center justify-center">
                <p className="text-slate-300 text-4xl">Under Construction..!</p>
                <p className="text-slate-300 text-2xl">There's nothing here, yet!</p>
              </div>
            </div>
            <div className="col-span-2">
            </div>
          </div>
        </Provider>
      )
}

export default SettingsPage;