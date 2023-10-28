import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const ChatSlice = createSlice(
    {
        name:"chat slice",
        initialState:{
            messages:[],
        },

        reducers : {
            addMessage : (state, action) => {
                state.messages.splice(LIVE_CHAT_COUNT, 1)
                state.messages.unshift(action.payload)
            }
        }
    }
)

export default ChatSlice.reducer;
export const {addMessage} = ChatSlice.actions