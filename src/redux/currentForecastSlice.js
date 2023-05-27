import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
}

const currentForecastSlice = createSlice({
    name: 'currentForecast',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getCurrentForecast.fulfilled, (state, action)=>{
            state.data = action.payload;
        })
    }
})

export const getCurrentForecast = createAsyncThunk("getWeather/currentForecast", async()=>{
    const data = await fetch("http://api.weatherapi.com/v1/current.json?key=4fa4d82e8f4f4ca6b08191330232005&q=Manchester");
      const result = await data.json(); 
      return result;
})

export default currentForecastSlice.reducer;