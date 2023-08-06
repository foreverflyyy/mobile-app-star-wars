import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../index";

interface State {
    favourites: string[]
}

const initialState: State = {
    favourites: []
}

const favouriteSlice = createSlice({
    name: "favouriteSlice",
    initialState,
    reducers: {
        setFavourites(state, action: any) {
            state.favourites = action;
        }
    }
})

export const favouriteReducer = favouriteSlice.reducer;

export const selectFavourite = (state: RootState) => state.favourite