import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
import Weather from "../constants/Weather";

const initialState = {
    data: {
        'location': {
            name: '',
            region: '',
            country: ''
        },
        'current': {
            feelslike_c: '',
            temp_c: '',
            uv: '',
            wind_mph: '',
            humidity: '',
            'condition': {
                icon: '',
                text: '',
            }
        }
    },
    status: StatusCode.IDLE
}

const currentForecastSlice = createSlice({
    name: 'currentForecast',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getCurrentForecast.pending, (state, action)=>{
            state.status = StatusCode.LOADING
        })
        .addCase(getCurrentForecast.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getCurrentForecast.rejected, (state, action)=>{
            state.status = StatusCode.ERROR
        })
    }
})

export const getCurrentForecast = createAsyncThunk("getWeather/currentForecast", async(city)=>{
    const data = await fetch(`${Weather.BASE_URL}current.json?key=${Weather.API_KEY}&q=${city}`);
    const result = await data.json();  
    return result;
})

export default currentForecastSlice.reducer;