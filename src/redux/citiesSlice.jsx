import { createSlice } from "@reduxjs/toolkit";



const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload)
        }
    }
})
