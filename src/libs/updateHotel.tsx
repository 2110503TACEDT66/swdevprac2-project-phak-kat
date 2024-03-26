import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function updateHotel(name: string, address: string, district: string, province: string, tel: string, price: string, capacity: string, description: string, hid: string, token: string) {
     
    const response = await fetch(`https://hotel-backend-beta.vercel.app/api/v1/hotels/${hid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            address: address,
            district: district,
            province: province,
            tel: tel,
            price: price,
            capacityPerRoom: capacity,
            description: description
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}