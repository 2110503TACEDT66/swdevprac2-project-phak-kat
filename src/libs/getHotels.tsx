export default async function getHotels() {
    //add timeout
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch('http://localhost:5000/api/v1/hotels')
    if(!response.ok) {
        throw new Error('Failed to fetch hospitals')
    }
    return await response.json()
}