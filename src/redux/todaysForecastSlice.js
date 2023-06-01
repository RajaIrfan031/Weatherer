import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Weather from "../constants/Weather";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const todayForecastSlice = createSlice({
    name: 'todayForecastSlice',
    initialState,
    reducers: {

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchtodayForecast.pending, (state, action)=>{
            state.status = StatusCode.LOADING
        })
        .addCase(fetchtodayForecast.fulfilled, (state, action)=>{
            state.status = StatusCode.IDLE;
            state.data = action.payload;
        })
        .addCase(fetchtodayForecast.rejected, (state, action)=>{
            state.status = StatusCode.ERROR;
        })
    }
})

export const fetchtodayForecast = createAsyncThunk('getWeather/todaysForecast', async(city)=>{
    const data = await fetch(`${Weather.BASE_URL}forecast.json?q=${city}&days=1&aqi=no&key=${Weather.API_KEY}`);
    const result = await data.json();
    return result.forecast.forecastday[0].hour;
}) 

export default todayForecastSlice.reducer;