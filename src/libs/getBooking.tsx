import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function getBooking(id:string, token : string) {

    const response = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/bookings/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to get booking")
    }

    return await response.json();
}