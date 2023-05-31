import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const fetchSearchSlice = createSlice({
    name: 'fetchSearch',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchSearchCities.fulfilled, (state, action)=>{
            state.data = action.payload
        })
    }
})

export const fetchSearchCities = createAsyncThunk('getweather/searchcities', async(cities)=>{
    const multiData = [];
    for(const city of cities){ 
        const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city.name}" "${city.region}&days=1&aqi=no&key=4fa4d82e8f4f4ca6b08191330232005%20`);
        const result = await data.json();
        multiData.push(result);
    } 
    return multiData;
})

export default fetchSearchSlice.reducer;