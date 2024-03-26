import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems: []}

export const bookSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) =>{
            if(state.bookItems.length == 3) {
                state.bookItems.shift()
            }
            state.bookItems.push(action.payload)
        },
        removeBooking: (state, action:PayloadAction<string>) =>{
            const remainItems = state.bookItems.filter(obj =>{
                return (obj._id !== action.payload)
            })
            state.bookItems = remainItems
        }
    }
})
export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer