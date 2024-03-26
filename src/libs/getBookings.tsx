export default async function getBookings() {

    const response = await fetch('https://hotel-backend-beta.vercel.app/api/v1/bookings', {next: {tags:['bookings']}})
    if(!response.ok) {
        throw new Error('Failed to fetch bookings')
    }
    return await response.json()
}