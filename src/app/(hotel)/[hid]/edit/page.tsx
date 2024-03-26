import HotelTextField from '@/components/HotelTextField'
import LogInButton from "@/components/LogInButton";
import getHotel from '@/libs/getHotel';
import Link from 'next/link';

export default async function EditHotel({params} : {params:{hid:string}}) {
    
    const hotel = await getHotel(params.hid)

    return (
        <main className="w-full flex flex-col justify-center space-y-6">
            <h1 className='mx-auto mt-10 text-3xl font-sans font-bold
            text-stone-900'>
            edit hotel's details
            </h1>

            <form className="w-full flex flex-col justify-center space-y-5">
                
                <div className="space-y-3 w-1/2 mx-auto">
                    <HotelTextField value={hotel.data.name} type='text' id="name" pText='name' lable='name' disable={false}/>
                    <HotelTextField value={hotel.data.address} type='text' id="address" pText='address' lable='address' disable={false}/>
                    <HotelTextField value={hotel.data.district} type='text' id="district" pText='district' lable='district' disable={false}/>
                    <HotelTextField value={hotel.data.province} type='text' id="province" pText='province' lable='province' disable={false}/>
                    <HotelTextField value={hotel.data.tel} type='text' id="tel" pText='tel' lable='tel' disable={false}/>
                    <HotelTextField value={hotel.data.price} type='text' id="price" pText='price' lable='price' disable={false}/>
                    <HotelTextField value={hotel.data.capacityPerRoom} type='text' id="capacity" pText='capacity' lable='capacity/room' disable={false}/>
                    <HotelTextField value={hotel.data.description} type='text' id="description" pText='description' lable='description' disable={false}/>
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