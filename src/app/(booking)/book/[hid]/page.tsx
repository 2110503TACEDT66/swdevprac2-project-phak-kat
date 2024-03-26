import BookingForm from '@/components/BookingForm';
import getHotel from '@/libs/getHotel'

export default async function Book({params}: {params: {hid: string}}) {
    const hotel = await getHotel(params.hid);
    const name = hotel.data.name;
    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          Booking
        </h1>
        <BookingForm hotelName={name}/>
      </main>
    );
  }