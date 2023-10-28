import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
const AppStore = configureStore(
    {
        reducer : {
            app: AppSlice,
            searchSlice :SearchSlice,
            chat : ChatSlice
        }
    }
)
export default AppStore;