import BookingForm from '@/components/BookingForm';

export default function Book() {
    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          Booking
        </h1>
        <BookingForm/>
      </main>
    );
  }