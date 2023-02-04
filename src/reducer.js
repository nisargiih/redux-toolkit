import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name : 'cats',
    initialState : {
        isLoading : 'true',
        cats : [],
    },
    reducers : {
        getCatsFetch : (state) => {
            state.isLoading = true
        },
        getCatsSuccess : (state,action) => {
            state.isLoading = false
            state.cats = action.payload
        },
        getCatsFailure : (state) => {
            state.isLoading = false
        }
    }
})

export const {getCatsFetch,getCatsSuccess,getCatsFailure} = catSlice.actions

export default catSlice.reducer