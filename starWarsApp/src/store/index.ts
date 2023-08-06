import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {favouriteReducer} from "./features/favouriteSlice";
import {catalogApi} from "./services/catalogApi";

const rootReducer = combineReducers({
    favourite: favouriteReducer,
    [catalogApi.reducerPath]: catalogApi.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;