import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import Sidebar from "../components/Sidebar"; 
import { useLocation } from "react-router-dom";
import { fetchSearchResults } from "../redux/search/searchSlice"; 
import Results from "../components/search/Results";
import GetInput from '../components/search/GetInput';

const Search = ()=>{ 

  const location = useLocation();
  const { searchValue } = location.state !== null ? location.state : null;
  const data = useSelector(state => state.searchResults.data);
  const citiesData = useSelector(state => state.fetchSearch.data)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchSearchResults(searchValue))
  },[]); 
  
  return(
    <Provider store={store} >
      <div className="h-full w-full min-h-[screen] md:h-screen md:w-screen md:grid md:grid-cols-6 md:grid-flow-col bg-[#0B131E] gap-4">
        <div className="col-span-1">
          <Sidebar isOn={0}/>
        </div>
        <div className="col-span-3 md:p-0 p-8 md:pt-8  max-h-[90%] overflow-scroll no-scrollbar"> 
          <Results title="Search Results" list={data} selectedIndex={4}/>
        </div>
      </div>
    </Provider>
  )
}

export default Search;