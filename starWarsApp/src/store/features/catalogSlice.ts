import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {Character} from "../../models/interfaces/Character";
import {TypeCatalog} from "../../models/enums/TypeCatalog";

interface State {
    typeCatalog: TypeCatalog,
    catalog: Character[],
    favourites: Character[],
    query: string,
    page: number
}

const initialState: State = {
    typeCatalog: TypeCatalog.Characters,
    catalog: [],
    favourites: [],
    query: "",
    page: 1,
}

const catalogSlice = createSlice({
    name: "favouriteSlice",
    initialState,
    reducers: {
        setTypeCatalog(state, action: PayloadAction<TypeCatalog>) {
            state.typeCatalog = action.payload;
        },
        setCatalog(state, action: PayloadAction<Character[]>) {
            state.catalog = action.payload;
        },
        addFavourite(state, action: PayloadAction<Character>) {
            state.favourites.push(action.payload);
        },
        removeFavourite(state, action: PayloadAction<Character>) {
            state.favourites = state.favourites.filter(item =>
                item.name !== action.payload.name);
        },
        clearFavourites(state) {
            state.favourites = [];
        },
        setQuery(state, action: PayloadAction<string>){
            state.query = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        }
    }
})

export default catalogSlice.reducer;

export const {
    setTypeCatalog,
    setCatalog,
    addFavourite,
    removeFavourite,
    clearFavourites,
    setQuery,
    setPage
} = catalogSlice.actions;

export const selectCatalog = (state: RootState) => state.catalog;