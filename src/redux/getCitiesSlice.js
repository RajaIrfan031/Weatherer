import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Weather from "../constants/Weather";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data: [
      {
        "location": {
          "id": 0,
          "name": "Manchester",
        },
        "current": {
          "temp_c": 0,
          "condition":{
           "icon" : ""
          }
        }
      },
      {
        "location": {
          "id": 1,
          "name": "London",
        }
      },
      {
        "location": {
          "id": 2,
          "name": "Liverpool",
        }
      },
      {
        "location": {
          "id": 3,
          "name": "Birmingham",
        }
      },
  ],
  status: StatusCode.IDLE
}

const GetCitiesSlice = createSlice({
    name: 'getCities',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
    builder
    .addCase(fetchCitiesWeather.pending, (state, action)=>{
      state.status = StatusCode.LOADING
    })
    .addCase(fetchCitiesWeather.fulfilled, (state, action)=>{
      state.status = StatusCode.IDLE;
      state.data = action.payload;
    })
    .addCase(fetchCitiesWeather.rejected, (state, action)=>{
        state.status = StatusCode.ERROR;
    })
    }
})

export const fetchCitiesWeather = createAsyncThunk('getWeather/getMultiCitiesWeather', async()=>{
  
  const multiData = [];
  for(const city of initialState.data){  
    const data = await fetch(`${Weather.BASE_URL}forecast.json?q=${city.location.name}&days=1&aqi=no&key=${Weather.API_KEY}`);
    const result = await data.json();
    multiData.push(result);
  }
  return multiData;
})

export default GetCitiesSlice.reducer;