import { createSlice } from "@reduxjs/toolkit";

const added = localStorage.getItem('favorites') !== null ? localStorage.getItem('favorites') : []

const initialState = {
    data: added
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add(state, action){
            // state.data = [...state.data,action.payload];
            // localStorage.setItem('favorites', JSON.stringify([...state.data,action.payload]));
            // state.data.indexOf(action.payload) === -1 ? localStorage.setItem('favorites', JSON.stringify([...state.data,action.payload])) : null;
            state.data = state.data.indexOf(action.payload) === -1 ? [...state.data,action.payload] : state.data;
            console.log(state.data.indexOf(action.payload));
            if(state.data.indexOf(action.payload) === -1){
                console.log(state.data.indexOf(action.payload));
                localStorage.setItem('favorites', JSON.stringify([...state.data,action.payload]))
            }
        },
        remove(state, action){
            return state.filter(favorite => favorite.id !== action.payload);
        },
        clearFavorites(state, action){
            return []
        }
    }
})

export const {add, remove, clearFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;