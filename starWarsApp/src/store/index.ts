import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catalogSlice from "./features/catalogSlice";
import {catalogApi} from "./services/catalogApi";
import favouriteSlice from "./features/favouriteSlice";

const rootReducer = combineReducers({
    catalog: catalogSlice,
    favourite: favouriteSlice,
    [catalogApi.reducerPath]: catalogApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([catalogApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>;