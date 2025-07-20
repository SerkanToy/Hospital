import { configureStore } from "@reduxjs/toolkit";
import { docktorReducer } from "../Pages/Doctor/Storage/Redux/doctorSlice";
import doctorApi from "../Pages/Doctor/Api/doctorApi";

const store = configureStore({
    reducer:{
        docktorStore : docktorReducer,

        [doctorApi.reducerPath] : doctorApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
        .concat(doctorApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export default store