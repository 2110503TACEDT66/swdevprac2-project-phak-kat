import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems: [{
    user: 'popp',
    hotel: 'kaka',
    startTime: '21',
    EndTime:'ss'
}]}

export const bookSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) =>{
            state.bookItems.push(action.payload)
            // if(state.bookItems.length > 3) {
            //     state.bookItems.pop()
            // }
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) =>{
            const remainItems = state.bookItems.filter(obj =>{
                return ((obj.user !== action.payload.user)
                || (obj.hotel !== action.payload.hotel)
                || (obj.startTime !== action.payload.startTime)
                || (obj.EndTime !== action.payload.EndTime))
            })
            state.bookItems = remainItems
        }
    }
})
export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer