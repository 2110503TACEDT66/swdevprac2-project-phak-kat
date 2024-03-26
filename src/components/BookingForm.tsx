'use client';
import HotelTextField from '@/components/HotelTextField'
import DateReserve from './DateReserve';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { addBooking } from '@/redux/features/bookSlice';
import { BookingItem } from '../../interface';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { dbConnect } from '@/db/db.Connect';
import Booking from '@/db/models/Booking';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';

export default function BookingForm({hotelName, hotelId, profileName}: {hotelName: string, hotelId: string, profileName: string}) {

    const [reserveStart, setReserveStart] = useState<Dayjs | null>(null);
    const [reserveEnd, setReserveEnd] = useState<Dayjs | null>(null);

    const dispatch = useDispatch<AppDispatch>()
    const makeBooking = () => {
        if(reserveStart && reserveEnd) {
            const item:BookingItem = {
                user: profileName,
                hotel: hotelId,
                startTime: dayjs(reserveStart).format('YYYY/MM/DD'),
                EndTime: dayjs(reserveEnd).format('YYYY/MM/DD')
            }
            dispatch(addBooking(item))
        }
    }


    return (
        <form
        className='flex flex-col w-1/2 space-y-5 justify-center mx-auto'
        onSubmit={(e)=>{
            e.preventDefault();
            makeBooking();
        }}>
            <div className='flex flex-row justify-between space-x-5'>
                <HotelTextField value={profileName} type='text' id="name" pText={profileName} lable='username' disable={true}/>
                <HotelTextField value={hotelName} type='text' id="hid" pText={hotelName} lable='hotel' disable={true}/>
            </div>
            <div className='flex flex-row justify-between space-x-5'>
                <DateReserve label='start' onSelectDate={(value: Dayjs) => {setReserveStart(value)}}></DateReserve>
                <DateReserve label='end' onSelectDate={(value: Dayjs) => {setReserveEnd(value)}}></DateReserve>
            </div>
            <div className='mx-auto'>
                <button type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Book 
                </button>
            </div>
        </form>
    );
}