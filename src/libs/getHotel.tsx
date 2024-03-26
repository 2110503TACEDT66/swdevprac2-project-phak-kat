export default async function getHotel(hid:string) {
    
    const response = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/hotels/${hid}`)
    if (!response.ok) {
        throw new Error("Failed to fetch hotel")
    }

    return await response.json()
}