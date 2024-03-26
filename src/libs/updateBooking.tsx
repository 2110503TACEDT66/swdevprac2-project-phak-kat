import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function updateBooking(startTime : Date , endTime : Date, id : string, token : string) {

    const response = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/bookings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            startDate: startTime,
            endDate: endTime
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}