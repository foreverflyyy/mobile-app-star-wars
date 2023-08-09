import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {Character} from "../../models/interfaces/Character";
import {TypeCatalog} from "../../models/enums/TypeCatalog";
import {Starship} from "../../models/interfaces/Starship";

interface State {
    typeCatalog: TypeCatalog,
    catalog: (Character | Starship)[],
    queryCatalog: string,
    page: number
}

const initialState: State = {
    typeCatalog: TypeCatalog.Characters,
    catalog: [],
    queryCatalog: "",
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
        setQueryCatalog(state, action: PayloadAction<string>){
            state.queryCatalog = action.payload;
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
    setQueryCatalog,
    setPage
} = catalogSlice.actions;

export const selectCatalog = (state: RootState) => state.catalog;