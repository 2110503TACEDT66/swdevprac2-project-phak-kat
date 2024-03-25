export default async function getHotels() {
    //add timeout
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch('https://hotel-backend-beta.vercel.app/api/v1/hotels', {cache:'no-store'})
    if(!response.ok) {
        throw new Error('Failed to fetch hotels')
    }
    return await response.json()
}