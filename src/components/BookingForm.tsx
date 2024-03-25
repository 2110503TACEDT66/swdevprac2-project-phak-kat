import HotelTextField from '@/components/HotelTextField'
import DateReserve from './DateReserve';
import LogInButton from './LogInButton';

export default function BookingForm() {
    return (
        <form className='flex flex-col w-1/2 space-y-5 justify-center mx-auto'>
            <div className='flex flex-row justify-between space-x-5'>
                <HotelTextField value='' type='text' id="name" pText='your username' lable='username' disable={true}/>
                <HotelTextField value='' type='text' id="hid" pText='hotel' lable='hotel' disable={true}/>
            </div>
            <div className='flex flex-row justify-between space-x-5'>
                <DateReserve lable='start'></DateReserve>
                <DateReserve lable='end'></DateReserve>
            </div>
            <div className='mx-auto'>
                <LogInButton buttonText='submit'/>
            </div>
        </form>
    );
}