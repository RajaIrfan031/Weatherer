import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    index: 0,
}

const threeHoursSlice = createSlice({
    name: 'threehours',
    initialState,
    reducers: {
        add(state, action){ 
            state.index=action.payload;
        }
    }
})

export const {add} = threeHoursSlice.actions;
export default threeHoursSlice.reducer;