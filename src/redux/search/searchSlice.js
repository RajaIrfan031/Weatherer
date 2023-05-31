import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchSearchResults.fulfilled, (state, action)=>{
           state.data = action.payload 
        })
    }
})

export const fetchSearchResults = createAsyncThunk(('getweather/search'), async(city)=>{

    const data = await fetch(`https://api.weatherapi.com/v1/search.json?q=${city}&days=1&aqi=no&key=4fa4d82e8f4f4ca6b08191330232005%20`);
    const cities = await data.json();
    const multiData = [];
    for(const city of cities){ 
        const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city.name}" "${city.region}&days=1&aqi=no&key=4fa4d82e8f4f4ca6b08191330232005%20`);
        const result = await data.json();
        multiData.push(result);
    } 
    return multiData;
})

export default searchSlice.reducer;