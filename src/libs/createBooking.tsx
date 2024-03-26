export default function createBooking({reserveStart, reserveEnd, hotelId}: {reserveStart: string, reserveEnd: string, hotelId: string}) 
{
    const data = {
        startTime: reserveStart?.toString(),
        endTime: reserveEnd?.toString()
    }
    return fetch(`/api/v1/hotels/${hotelId}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

  }