import HotelTextField from '@/components/HotelTextField'
import LogInButton from "@/components/LogInButton";
import getHotel from '@/libs/getHotel';
import Link from 'next/link';
import { useState } from 'react';

export default async function EditHotel({params} : {params:{hid:string}}) {
    
    const [hotelName, setHotelName] = useState<string>('');
    const [hotelAddress, setHotelAddress] = useState<string>('');
    const [hotelDistrict, setHotelDistrict] = useState<string>('');
    const [hotelProvince, setHotelProvince] = useState<string>('');
    const [hotelTel, setHotelTel] = useState<string>('');
    const [hotelPrice, setHotelPrice] = useState<string>('');
    const [hotelCapacity, setHotelCapacity] = useState<string>('');
    const [hotelDescription, setHotelDescription] = useState<string>('');

    const hotel = await getHotel(params.hid)

    return (
        <main className="w-full flex flex-col justify-center space-y-6">
            <h1 className='mx-auto mt-10 text-3xl font-sans font-bold
            text-stone-900'>
            edit hotel's details
            </h1>

            <form className="w-full flex flex-col justify-center space-y-5">
                
                <div className="space-y-3 w-1/2 mx-auto">
                    <HotelTextField value={hotel.data.name} type='text' id="name" pText='name' label='name' disable={false}/>
                    <HotelTextField value={hotel.data.address} type='text' id="address" pText='address' label='address' disable={false}/>
                    <HotelTextField value={hotel.data.district} type='text' id="district" pText='district' label='district' disable={false}/>
                    <HotelTextField value={hotel.data.province} type='text' id="province" pText='province' label='province' disable={false}/>
                    <HotelTextField value={hotel.data.tel} type='text' id="tel" pText='tel' label='tel' disable={false}/>
                    <HotelTextField value={hotel.data.price} type='text' id="price" pText='price' label='price' disable={false}/>
                    <HotelTextField value={hotel.data.capacityPerRoom} type='text' id="capacity" pText='capacity' label='capacity/room' disable={false}/>
                    <HotelTextField value={hotel.data.description} type='text' id="description" pText='description' label='description' disable={false}/>
                </div>
                
                <div className="mx-auto">
                    <Link href={`/${params.hid}`}>
                        <LogInButton />
                    </Link>
                </div>

            </form>
        </main>
    );
}