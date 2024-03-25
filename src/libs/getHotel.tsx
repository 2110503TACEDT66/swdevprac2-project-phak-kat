export default async function getHotel(id:string) {
    const response = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/hotels/${id}`)

    if(!response.ok) {
        throw new Error('Failed to fetch this hotel')
    }

    return await response.json()
}