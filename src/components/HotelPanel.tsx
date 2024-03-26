import Link from "next/link";
import HotelCard from "./hotelCard";

export default async function HotelPanel({hotelsJson} : {hotelsJson:HotelJson}) {
    
    const hotels = await hotelsJson

    return (
        <div className="px-10 py-5">
            <div className="grid grid-cols-3 gap-10">
                {
                    hotels.data.map((hotelItem:HotelItem) => (
                        <Link href={`/${hotelItem._id}`} key={hotelItem._id}>
                        <HotelCard hotelItem={hotelItem} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}