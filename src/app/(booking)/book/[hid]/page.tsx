import BookingForm from '@/components/BookingForm';
import getHotel from '@/libs/getHotel'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';

export default function Book({params}: {params: {hid: string}}) {
    // const session = await getServerSession(authOptions);
    // if (!session) {
    //     return null;
    // }
    // const profile = await getUserProfile(session.user.token);
    // const hotel = await getHotel(params.hid);
    // const name = hotel.data.name;
    
    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          Booking
        </h1>
        <BookingForm hotelName={'name'} hotelId={'params.hid'} profileName={'profile.data.name'}/>
      </main>
    );
}