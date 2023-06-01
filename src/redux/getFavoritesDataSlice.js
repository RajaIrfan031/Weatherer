import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Weather from "../constants/Weather";
import StatusCode from "../utils/StatusCode";

const added = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : []

const initialState = {
    data: added,
    index: 0,
    status: StatusCode.IDLE
}

const getFavoritesDataSlice = createSlice({
    name: 'getFavoritesData',
    initialState,
    reducers:{
        add(state, action){
            state.index = action.payload;
        }
    },
    extraReducers: (builder)=>{ 
    builder
    .addCase(fetchFavoritesForecast.pending, (state, action)=>{
      state.status = StatusCode.LOADING
    })
    .addCase(fetchFavoritesForecast.fulfilled, (state, action)=>{
      state.status = StatusCode.IDLE;
      state.data = action.payload;
    })
    .addCase(fetchFavoritesForecast.rejected, (state, action)=>{
        state.status = StatusCode.ERROR;
    })
    }
})

export const fetchFavoritesForecast = createAsyncThunk('getweather/getfavoritesforecast', async()=>{
    const multiData = [];
    const stored = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : []
    for(const city of stored){  
        const data = await fetch(`${Weather.BASE_URL}forecast.json?q=${city.name}" " ${city.region}&days=1&aqi=no&key=${Weather.API_KEY}`);
        const result = await data.json();
        multiData.push(result);
    } 
    return multiData;
})

export const {add} = getFavoritesDataSlice.actions;
export default getFavoritesDataSlice.reducer;