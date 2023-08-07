import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {Character} from "../../models/Character";

interface State {
    catalog: Character[],
    favourites: Character[],
    page: number
}

const initialState: State = {
    catalog: [],
    favourites: [],
    page: 1,
}

const catalogSlice = createSlice({
    name: "favouriteSlice",
    initialState,
    reducers: {
        setCatalog(state, action: PayloadAction<Character[]>) {
            state.catalog = action.payload;
        },
        setFavourites(state, action: PayloadAction<Character[]>) {
            state.favourites = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        }
    }
})

export default catalogSlice.reducer;

export const {
    setCatalog,
    setFavourites,
    setPage
} = catalogSlice.actions;

export const selectFavourite = (state: RootState) => state.catalog;