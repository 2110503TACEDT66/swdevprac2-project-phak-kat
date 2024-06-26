export default async function deleteBooking(id:string, token: string) {

    const response = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to delete bookings: ${response.statusText}`);
    }

    return await response.json();
}