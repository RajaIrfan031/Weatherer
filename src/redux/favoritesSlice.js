import { createSlice } from "@reduxjs/toolkit";

const added = localStorage.getItem('favorites') !== null ? JSON.parse(localStorage.getItem('favorites')) : []

const initialState = {
    data: added
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add(state, action){
            let key = state.data.find(city => city.name === action.payload.name && city.region === action.payload.region); 
            // let isRegionKey = state.data.find(region => region.region === action.payload.region);
            // console.log("key: ",key , " region: ", isRegionKey);
            
            if(key === undefined){
                    localStorage.setItem('favorites',  JSON.stringify([...state.data,action.payload]));
                    state.data = [...state.data,action.payload];
            }  
        },
        remove(state, action){
            let key = state.data.findIndex(city => city.name === action.payload)
            if(key > -1){
                state.data.splice(key, 1)
                localStorage.setItem('favorites', JSON.stringify(state.data));
            }
        },
        clearFavorites(state, action){
            return []
        }
    }
})

export const {add, remove, clearFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;