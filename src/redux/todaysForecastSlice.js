import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const todayForecastSlice = createSlice({
    name: 'todayForecastSlice',
    initialState,
    reducers: {

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchtodayForecast.fulfilled, (state, action)=>{
            state.data = action.payload;
        })
    }
})

export const fetchtodayForecast = createAsyncThunk('getWeather/todaysForecast', async()=>{
    const data = await fetch("https://api.weatherapi.com/v1/forecast.json?q=London&days=1&aqi=no&key=4fa4d82e8f4f4ca6b08191330232005%20");
      const result = await data.json();
      return result.forecast.forecastday[0].hour;
}) 

export default todayForecastSlice.reducer;