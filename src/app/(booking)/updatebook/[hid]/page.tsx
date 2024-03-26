import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import UpdateBookingForm from '@/components/UpdateBookingForm';
import getBooking from '@/libs/getBooking';

export default async function Book({params}: {params: {id: string}}) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return null;
    }
    const profile = await getUserProfile(session.user.token);

    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          Booking
        </h1>
        <UpdateBookingForm bookId={params.id} profileName={profile.data.name}/>
      </main>
    );
}