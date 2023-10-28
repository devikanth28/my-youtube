import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
const AppStore = configureStore(
    {
        reducer : {
            app: AppSlice,
            searchSlice :SearchSlice
        }
    }
)
export default AppStore;