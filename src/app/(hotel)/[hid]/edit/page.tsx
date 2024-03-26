'use client';
import HotelTextField from '@/components/HotelTextField'
import LogInButton from "@/components/LogInButton";
import getHotel from '@/libs/getHotel';
import Link from 'next/link';
import { useState } from 'react';
import RegisterText from '@/components/RegisterText';
import updateHotel from '@/libs/updateHotel';
import { useSession } from "next-auth/react"

export default function EditHotel({params} : {params:{hid:string}}) {
    
    const [hotelName, setHotelName] = useState<string>('');
    const [hotelAddress, setHotelAddress] = useState<string>('');
    const [hotelDistrict, setHotelDistrict] = useState<string>('');
    const [hotelProvince, setHotelProvince] = useState<string>('');
    const [hotelTel, setHotelTel] = useState<string>('');
    const [hotelPrice, setHotelPrice] = useState<string>('');
    const [hotelCapacity, setHotelCapacity] = useState<string>('');
    const [hotelDescription, setHotelDescription] = useState<string>('');

    const {data: session} = useSession();
    if (!session) {
        return null;
    }

    const updateHotelClick = async () => {
        try {
            await updateHotel(hotelName, hotelAddress, hotelDistrict, hotelProvince, hotelTel, hotelPrice, hotelCapacity, hotelDescription, params.hid, session.user.token);
            console.log("makeBooking success");
        } catch (error) {
            console.error("Error making booking:", error);
        }
    };

    return (
        <main className="w-full flex flex-col justify-center space-y-6">
            <h1 className='mx-auto mt-10 text-3xl font-sans font-bold
            text-stone-900'>
            edit hotel's details
            </h1>

            <form className="w-full flex flex-col justify-center space-y-5">
                
                <div className="space-y-3 w-1/2 mx-auto">
                    <RegisterText value={hotelName} type='text' id="name" pText='name' label='name' disable={false} onChangeText={(value: string) => {setHotelName(value)}}/>
                    <RegisterText value={hotelAddress} type='text' id="address" pText='address' label='address' disable={false} onChangeText={(value: string) => {setHotelAddress(value)}}/>
                    <RegisterText value={hotelDistrict} type='text' id="district" pText='district' label='district' disable={false} onChangeText={(value: string) => {setHotelDistrict(value)}}/>
                    <RegisterText value={hotelProvince} type='text' id="province" pText='province' label='province' disable={false} onChangeText={(value: string) => {setHotelProvince(value)}}/>
                    <RegisterText value={hotelTel} type='text' id="tel" pText='tel' label='tel' disable={false} onChangeText={(value: string) => {setHotelTel(value)}}/>
                    <RegisterText value={hotelPrice} type='text' id="price" pText='price' label='price' disable={false} onChangeText={(value: string) => {setHotelPrice(value)}}/>
                    <RegisterText value={hotelCapacity} type='text' id="capacity" pText='capacity' label='capacity/room' disable={false} onChangeText={(value: string) => {setHotelCapacity(value)}}/>
                    <RegisterText value={hotelDescription} type='text' id="description" pText='description' label='description' disable={false} onChangeText={(value: string) => {setHotelDescription(value)}}/>
                </div>
                
                <div className='w-full'>
            <input type="submit"
                className="px-6 py-2 
                rounded-full bg-neutral-800 shadow-lg
                text-white text-md font-sans font-normal
                transition ease-in-out delay-150 duration-300 
                hover:scale-105 hover:text-md"
                onClick={(e) => {
                    e.preventDefault();
                    updateHotelClick();
                }}
            />
        </div>

            </form>
        </main>
    );
}