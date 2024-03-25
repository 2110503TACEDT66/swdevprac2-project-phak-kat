import Link from "next/link";
import HotelCard from "./HotelCard";

export default async function HotelPanel({hotelsJson} : {hotelsJson:HotelJson}) {
    
    const hotels = await hotelsJson

    return (
        <div className="px-10 py-5">
            <div className="grid grid-cols-3 gap-10">
                {
                    hotels.data.map((hotelItem:HotelItem) => (
                        <Link href={`/${hotelItem._id}`} key={hotelItem._id}>
                        <HotelCard hotelName={hotelItem.name} location={hotelItem.province}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}