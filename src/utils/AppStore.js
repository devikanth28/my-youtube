import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key : "root",
    version:1,
    storage
}

const rootReducer = combineReducers({
    app: AppSlice,
    searchSlice :SearchSlice,
    chat : ChatSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const AppStore = configureStore(
    {
        reducer : persistedReducer
    }
)

const peristedStore = persistStore(AppStore);

export {AppStore, peristedStore};