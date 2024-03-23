import Image from "next/image";

export default function HotelCard({hotelName, location} : {hotelName:string, location:string}){
    

    return (
        <div className="w-full h-[400px] p-[20px] rounded-lg shadow-lg hover:bg-gray-100">
            <div className='flex w-auto h-[80%] relative rounded-lg justify-center'>
                <Image src='/img/test.jpg'
                alt='Product Picture' fill={true}
                className='object-cover rounded-lg'/>
            </div>
            <div className="w-full h-[20%] flex flex-row pt-5">
                <div className="w-[80%] relative flex flex-col justify-start">
                    <p className="text-xl font-semibold font-sans">{hotelName}</p>
                    <p className="text-sm font-sans">{location}</p>
                </div>
                <div className="w-[20%] flex justify-end">
                    <button className="bg-gray-300 px-5 py-1 rounded-lg font-sans">Book</button>
                </div>
            </div>
        </div>
    );
}