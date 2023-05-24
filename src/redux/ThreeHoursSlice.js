import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const ThreeHoursSlice = createSlice({
    name: 'threehours',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload);
        }
    }
})

export const {add} = ThreeHoursSlice.actions;
export default ThreeHoursSlice.reducer;