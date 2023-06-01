import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Weather from "../constants/Weather";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const threeDaysForecastSlice = createSlice({
    name: 'threeDaysForecastSlice',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchThreeDaysForecast.pending, (state, action)=>{
            state.status = StatusCode.LOADING
        })
        .addCase(fetchThreeDaysForecast.fulfilled, (state, action)=>{
            state.status = StatusCode.IDLE;
            state.data = action.payload;
        })
        .addCase(fetchThreeDaysForecast.rejected, (state, action)=>{
            state.status = StatusCode.ERROR;
        })
    }
})

export const fetchThreeDaysForecast = createAsyncThunk('getWeather/threedays', async(city)=>{
    const data = await fetch(`${Weather.BASE_URL}forecast.json?q=${city}&days=3&key=${Weather.API_KEY}`);
    const result = await data.json();
    return result.forecast.forecastday;
})

export default threeDaysForecastSlice.reducer;