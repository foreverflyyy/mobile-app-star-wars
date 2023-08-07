import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catalogSlice from "./features/catalogSlice";
import {catalogApi} from "./services/catalogApi";

const rootReducer = combineReducers({
    catalog: catalogSlice,
    [catalogApi.reducerPath]: catalogApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([catalogApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>;