import HotelTextField from '@/components/HotelTextField'
import DateReserve from './DateReserve';

export default function BookingForm() {
    return (
        <form className='flex flex-col w-1/2 space-y-5'>
            <div className='flex flex-row justify-between space-x-5'>
                <HotelTextField id="name" pText='your username' lable='username'/>
                <HotelTextField id="hid" pText='hotel' lable='hotel'/>
            </div>
            <div className='flex flex-row justify-between space-x-5'>
                <DateReserve lable='start'></DateReserve>
                <DateReserve lable='end'></DateReserve>
            </div>
        </form>
    );
}