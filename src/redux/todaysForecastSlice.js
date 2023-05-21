import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
      data: []
};

const todayForecastSlice = createSlice({
      name: 'todaysForecastSlice',
      initialState,
      reducers:{

      },
      extraReducers: (builder) =>{
       builder
       .addCase(getTodaysForecast.fulfilled, (state, action)=>{
            state.data = action.payload;
       })
      }
})

export const getTodaysForecast = createAsyncThunk('weather/todaysForecast',async()=>{
      //const data = await fetch("http://api.weatherapi.com/v1/current.json?key=4fa4d82e8f4f4ca6b08191330232005&q=London");
      // const result = await data.json();
      // console.log("result: ",result);
      return 'result';
})


export default todayForecastSlice.reducer;