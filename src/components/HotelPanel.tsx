import HotelCard from "./HotelCard";

export default function HotelPanel() {
    return (
        <div className="px-10 py-5">
            <div className="grid grid-cols-3 gap-10">
                <HotelCard hotelName="Hotel name" location="Location"/>
                <HotelCard hotelName="Hotel name" location="Location"/>
                <HotelCard hotelName="Hotel name" location="Location"/>
                <HotelCard hotelName="Hotel name" location="Location"/>
                <HotelCard hotelName="Hotel name" location="Location"/>
                <HotelCard hotelName="Hotel name" location="Location"/>
            </div>
        </div>
    );
}