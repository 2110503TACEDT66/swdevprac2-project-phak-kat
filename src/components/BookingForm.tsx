import HotelTextField from '@/components/HotelTextField'
import DateReserve from './DateReserve';
import LogInButton from './LogInButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';

export default async function BookingForm() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return null;
    }
    const profile = await getUserProfile(session.user.token);

    return (
        <form className='flex flex-col w-1/2 space-y-5 justify-center mx-auto'>
            <div className='flex flex-row justify-between space-x-5'>
                <HotelTextField value={profile.data.name} type='text' id="name" pText={profile.data.name} lable='username' disable={true}/>
                <HotelTextField value={profile.data.name} type='text' id="hid" pText={profile.data.name} lable='hotel' disable={true}/>
            </div>
            <div className='flex flex-row justify-between space-x-5'>
                <DateReserve lable='start'></DateReserve>
                <DateReserve lable='end'></DateReserve>
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