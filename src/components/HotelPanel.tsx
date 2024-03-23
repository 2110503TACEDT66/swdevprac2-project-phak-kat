import HotelCard from "./hotelCard";

export default function HotelPanel() {
    return (
        <div className="p-[10px]">
            <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
            </div>
        </div>
    );
}