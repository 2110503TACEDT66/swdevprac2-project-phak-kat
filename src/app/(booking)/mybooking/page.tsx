import BookingCard from "@/components/BookingCard";

export default function MyBooking() {
    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          My Booking
        </h1>
        <div className="flex flex-col space-y-6">
            <BookingCard params={{id:'string'}}/>
            <BookingCard params={{id:'string'}}/>
            <BookingCard params={{id:'string'}}/>
        </div>
      </main>
    );
  }