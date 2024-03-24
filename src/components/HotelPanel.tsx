import Link from "next/link";
import HotelCard from "./HotelCard";

export default async function HotelPanel({hotelsJson} : {hotelsJson:Object}) {
    
    const hotels = await hotelsJson
    
    return (
        <div className="px-10 py-5">
            <div className="grid grid-cols-3 gap-10">
                {
                    hotels.data.map((hotelItem:Object) => (
                        <Link href={`/${hotelItem._id}`}>
                        <HotelCard hotelName={hotelItem.name} location={hotelItem.province}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}