'use client';
import HotelTextField from '@/components/HotelTextField'
import DateReserve from './DateReserve';
import { use, useState } from 'react';
import { Dayjs } from 'dayjs';
import createBooking  from '@/libs/createBooking';
import { useSession } from "next-auth/react"
import updateBooking from '@/libs/updateBooking';
import deleteBooking from '@/libs/deleteBooking';

export default function DeleteBookingForm({bookId, profileName}: {bookId: string, profileName: string}) {

    const {data: session} = useSession();
    if (!session) {
        return null;
    }

    const deleteBookingClick = async () => {
        if (!bookId) return;
    
        try {

            await deleteBooking(bookId, session.user.token);
            console.log("Delete booking success");
        } catch (error) {
            console.error("Error delete booking:", error);
        }
    };

    return (
        <form className='flex flex-col w-1/2 space-y-5 justify-center mx-auto'>
            <div className='flex flex-row justify-between space-x-5'>
                <HotelTextField value={profileName} type='text' id="name" pText={profileName} label='username' disable={true}/>
            </div>
            <div className='mx-auto'>
                <button type='submit'
                onClick={ (e) =>
                    {
                        e.preventDefault();
                        deleteBookingClick();
                    }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Delete
                </button>
            </div>
        </form>
    );
}