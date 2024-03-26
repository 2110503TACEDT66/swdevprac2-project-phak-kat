'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function HotelCard({hotelItem} : {hotelItem:HotelItem}) {
    const router = useRouter();

    const handleBookClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/book/${hotelItem._id}`);
    };

    const pic = hotelItem.photoArray[0] || '/img/test.jpg';
    
    return (
        <div className="w-full h-[400px] p-[20px] rounded-lg shadow-lg hover:bg-gray-100">
            <div className='flex w-auto h-[80%] relative rounded-lg justify-center'>
                <Image src={pic} alt='Product Picture' fill={true} className='object-cover rounded-lg'/>
            </div>
            <div className="w-full h-[20%] flex flex-row pt-5">
                <div className="w-[80%] relative flex flex-col justify-start">
                    <p className="text-xl font-semibold font-sans">{hotelItem.name}</p>
                    <p className="text-sm font-sans">{hotelItem.district}</p>
                </div>
                <div className="w-[20%] flex justify-end">
                    <button className="bg-gray-300 px-5 py-1 rounded-lg font-sans hover:bg-gray-600" onClick={(e) => {handleBookClick(e)}}>Book</button>
                </div>
            </div>
        </div>
    );
}
