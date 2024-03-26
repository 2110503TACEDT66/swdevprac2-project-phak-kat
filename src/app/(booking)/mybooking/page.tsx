import Image from "next/image";
import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import getBookings from "@/libs/getBookings";

export default async function MyBooking() {
    const booking: BookingJson = await getBookings();
    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          My Booking
        </h1>
        <div className="flex flex-col space-y-6">
          {booking.data.map((booking) => (
            <BookingCard booking={booking} />
          ))}
        </div>
      </main>
    );
}