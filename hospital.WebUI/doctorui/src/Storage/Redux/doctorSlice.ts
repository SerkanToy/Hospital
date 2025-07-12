import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    doctors:[],
    doctorId:"",
    search:""
}

export const doctorSlice = createSlice({
    name:"doctor",
    initialState:initalState,
    reducers:{
        getDoctors:(state,action) => {
            state.doctors = action.payload
        },
        getDoctor:(state,action) => {
            state.doctorId = action.payload
        },
        setSearchItem:(state,action) => {
            state.search = action.payload
        }
    }
})

export const { getDoctors, getDoctor, setSearchItem } = doctorSlice.actions
export const docktorReducer = doctorSlice.reducer