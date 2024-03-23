import Image from "next/image";

export default function HotelCard(){
    return (
        <div className="w-1/4 h-[300px] p-[20px] rounded-lg shadow-lg hover:bg-gray-100">
            <div className='flex w-auto h-[70%] relative rounded-lg justify-center'>
                <Image src='/img/test.jpg'
                alt='Product Picture' fill={true}
                className='object-cover rounded-lg'/>
            </div>
            <div className="w-full h-[30%] flex flex-row pt-6">
                <div className="w-[80%] relative flex flex-col justify-start">
                    <p className="text-lg font-sans">Hotel name</p>
                    <p className="text-sm font-sans">Location</p>
                </div>
                <div className="w-[20%] flex justify-end">
                    <button className="bg-hRed px-3 rounded-lg font-sans">Book</button>
                </div>
            </div>
        </div>
    );
}