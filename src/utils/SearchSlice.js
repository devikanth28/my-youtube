import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice(
    {
        name:"Search",
        initialState:{

        },
        reducers:{
            cacheResults : (state, action) =>{
                // state = {...state, ...action.payload}
                state = Object.assign(state, action.payload)
            }
        }

    }
);
export const {cacheResults} = SearchSlice.actions
export default SearchSlice.reducer;