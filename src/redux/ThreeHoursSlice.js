import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    index: 0,
}

const ThreeHoursSlice = createSlice({
    name: 'threehours',
    initialState,
    reducers: {
        add(state, action){ 
            state.data=action.payload;
        }
    }
})

export const {add} = ThreeHoursSlice.actions;
export default ThreeHoursSlice.reducer;