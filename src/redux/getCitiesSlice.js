import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  ]
}

const GetCitiesSlice = createSlice({
    name: 'getCities',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
      builder
      .addCase(fetchCitiesWeather.fulfilled, (state, action)=>{
        console.log("p;: ", action.payload);
        state.data = action.payload;
      })
    }
})

export const fetchCitiesWeather = createAsyncThunk('getWeather/getMultiCitiesWeather', async()=>{
  
  const multiData = [];
  for(const city of initialState.data){ 
    const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city.location.name}&days=1&aqi=no&key=4fa4d82e8f4f4ca6b08191330232005%20`);
    const result = await data.json();
    multiData.push(result);
  }
  console.log("multi: ", multiData);
  return multiData;
})

export default GetCitiesSlice.reducer;