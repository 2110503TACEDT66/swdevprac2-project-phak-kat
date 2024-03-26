import Image from "next/image";
import Link from "next/link";
import getHotel from "@/libs/getHotel";

export default async function BookingCard({booking} : {booking:BookingItem}) {

    return (
        <div className="h-48 w-3/4 mx-auto flex flex-row
        font-sans bg-neutral-100 rounded-lg shadow-md
        hover:shadow-lg transition ease-in-out delay-150 duration-300 hover:scale-105">
            
            <div className="w-3/5 px-12 py-7 flex flex-col space-y-1
            lg:flex-row lg:justify-between">
                <div className="lg:self-center">
                    <div className="flex flex-row space-x-3">
                        <i style={{fontSize:'25px'}} className="fi fi-sr-building"></i>
                        <div className="text-2xl font-semibold text-neutral-800 top-0">{booking.hotel.name}</div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <i style={{fontSize:'18px'}} className="fi fi-sr-calendar-day"></i>
                        <div className="text-md font-semibold text-neutral-800 top-0">{booking.startTime.toString()}</div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <i style={{fontSize:'18px'}} className="fi fi-sr-phone-call"></i>
                        <div className="text-md font-semibold text-neutral-800 top-0">{booking.hotel.tel}</div>
                    </div>
                </div>

                <div className="flex flex-row space-x-4 mr-auto
                lg:flex-col lg:space-y-4 lg:my-auto lg:mr-0 lg:self-center">
                    <Link href={`/updatebook/${booking._id}`}>
                        <div className="px-6 py-1.5 max-w-28 ml-auto text-center
                            rounded-full bg-neutral-800 shadow-lg
                            text-white text-md font-sans font-normal
                            transition ease-in-out delay-150 duration-300 
                            hover:scale-105 hover:text-md">
                            <div className="flex flex-row space-x-3">
                                <i style={{fontSize:'18px'}} className="fi fi-sr-file-edit"></i>
                                <div className="text-md font-semibold text-neutral-100 top-0">edit</div>
                            </div>
                        </div>
                    </Link>
                    <div className="px-6 py-1.5 max-w-28 ml-auto text-center
                        rounded-full bg-neutral-800 shadow-lg
                        text-white text-md font-sans font-normal
                        transition ease-in-out delay-150 duration-300 
                        hover:scale-105 hover:text-md">
                        <div className="flex flex-row space-x-3">
                            <i style={{fontSize:'18px'}} className="fi fi-sr-trash"></i>
                            <div className="text-md font-semibold text-neutral-100 top-0">delete</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}