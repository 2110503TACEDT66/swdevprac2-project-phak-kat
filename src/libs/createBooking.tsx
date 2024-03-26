export default async function createBooking(reserveStart: Date, reserveEnd: Date, hotelId: string) 
{
    const data = {
        startTime: reserveStart?.toString(),
        endTime: reserveEnd?.toString()
    }
    const res = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/hotels/${hotelId}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    return await res.json()

}