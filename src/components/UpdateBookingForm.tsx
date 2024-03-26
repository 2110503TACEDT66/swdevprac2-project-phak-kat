'use client';
import HotelTextField from '@/components/HotelTextField'
import DateReserve from './DateReserve';
import { use, useState } from 'react';
import { Dayjs } from 'dayjs';
import createBooking  from '@/libs/createBooking';
import { useSession } from "next-auth/react"
import updateBooking from '@/libs/updateBooking';

export default function UpdateBookingForm({bookId, profileName}: {bookId: string, profileName: string}) {

    const [reserveStart, setReserveStart] = useState<Dayjs | null>(null);
    const [reserveEnd, setReserveEnd] = useState<Dayjs | null>(null);
    
    const {data: session} = useSession();
    if (!session) {
        return null;
    }

    const updateBookingClick = async () => {
        if (!bookId || !reserveEnd || !reserveStart) return;
        
        try {
            const startDateTime = reserveStart.toDate();
            const endDateTime = reserveEnd.toDate();
            
            await updateBooking(startDateTime, endDateTime, bookId, session.user.token);
            console.log("updateBooking success");
        } catch (error) {
            console.error("Error update booking:", error);
        }
    };

    return (
        <form className='flex flex-col w-1/2 space-y-5 justify-center mx-auto'>
            <div className='flex flex-row justify-between space-x-5'>
                <HotelTextField value={profileName} type='text' id="name" pText={profileName} label='username' disable={true}/>
            </div>
            <div className='flex flex-row justify-between space-x-5'>
                <DateReserve label='start' onSelectDate={(value: Dayjs) => {setReserveStart(value)}}></DateReserve>
                <DateReserve label='end' onSelectDate={(value: Dayjs) => {setReserveEnd(value)}}></DateReserve>
            </div>
            <div className='mx-auto'>
                <button type='submit'
                onClick={ (e) =>
                    {
                        e.preventDefault();
                        updateBookingClick();
                    }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Update
                </button>
            </div>
        </form>
    );
}