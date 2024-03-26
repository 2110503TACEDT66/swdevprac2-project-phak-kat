import Image from "next/image";
import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import getBookings from "@/libs/getBookings";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MyBooking() {

    const session = await getServerSession(authOptions);
    if (!session) {
        return (
          <main className="w-full flex flex-col justify-center space-y-6">
            <h1 className='mx-auto mt-10 text-3xl font-sans font-bold
            text-stone-900'>
              Please sign in
            </h1>
            <Link className="mx-auto" href='/api/auth/signin'>
              <button className='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Sign in
              </button>
            </Link>
          </main>
        );
    }

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