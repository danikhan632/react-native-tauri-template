import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    origin:null,
    dest:null,
    travelTime:null
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrigin: (state,action) => {
            state.origin = action.payload
        },
        setDestination: (state,action) => {
            state.dest = action.payload
        },
        setTravelTime: (state,action) => {
            state.travelTime = action.payload
        },
    },
});

export const{ setOrigin, setDestination,setTravelTime} = navSlice.actions
export const selectOrigin = (state) => state.nav.origin
export const selectDest = (state) => state.nav.dest
export const selectTravelTime = (state) => state.nav.travelTime

export default navSlice.reducer;
