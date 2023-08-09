import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {TypeCatalogItems} from "../../models/types/TypeCatalogItems";
import {TypeCatalogItem} from "../../models/types/TypeCatalogItem";

interface State {
    favourites: TypeCatalogItems,
    queryFavourite: string,
}

const initialState: State = {
    favourites: [],
    queryFavourite: "",
}

const favouriteSlice = createSlice({
    name: "favouriteSlice",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<TypeCatalogItem>) {
            state.favourites.push(action.payload);
        },
        removeFavourite(state, action: PayloadAction<TypeCatalogItem>) {
            state.favourites = state.favourites.filter(item =>
                item.name !== action.payload.name);
        },
        clearFavourites(state) {
            state.favourites = [];
        },
        setQueryFavourite(state, action: PayloadAction<string>){
            state.queryFavourite = action.payload;
        },
    }
})

export default favouriteSlice.reducer;

export const {
    addFavourite,
    removeFavourite,
    clearFavourites,
    setQueryFavourite,
} = favouriteSlice.actions;

export const selectFavourite = (state: RootState) => state.favourite;