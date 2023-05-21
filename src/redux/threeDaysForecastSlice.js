import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const threeDaysForecastSlice = createSlice({
    name: 'threeDaysForecastSlice',
    initialState,
    reducers: {

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchThreeDaysForecast.fulfilled, (state, action)=>{
            state.data = action.payload;
        })
    }
})

export const fetchThreeDaysForecast = createAsyncThunk('getWeather/threedays', async()=>{
    const data = await fetch("https://api.weatherapi.com/v1/forecast.json?q=London&days=3&aqi=no&tp=24&key=4fa4d82e8f4f4ca6b08191330232005&q=London");
      const result = await data.json();
      console.log("resulted 3 days: ",result.forecast.forecastday);
      return result.forecast.forecastday;
})

export default threeDaysForecastSlice.reducer;