import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const added = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : []

const initialState = {
    data: added,
    index: 0
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
        .addCase(fetchFavoritesForecast.fulfilled, (state,action)=>{
            state.data = action.payload;
        })
    }
})

export const fetchFavoritesForecast = createAsyncThunk('getweather/getfavoritesforecast', async()=>{
    const multiData = [];
    for(const city of initialState.data){ 
        const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city.name}&days=1&aqi=no&key=4fa4d82e8f4f4ca6b08191330232005%20`);
        const result = await data.json();
        multiData.push(result);
    } 
    return multiData;
})

export const {add} = getFavoritesDataSlice.actions;
export default getFavoritesDataSlice.reducer;