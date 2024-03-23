import Image from "next/image";

export default function HotelCard(){
    return (
        <div className="w-[511px] h-[417px] p-[30px] rounded-lg shadow-lg">
            <div className='flex w-auto h-[248px] relative rounded-lg justify-center'>
                <Image src='/img/test.jpg'
                alt='Product Picture' fill={true}
                className='object-cover rounded-lg'/>
            </div>
            <div className="w-full h-auto flex flex-row mt-[30px]">
                <div className="w-[70%] flex flex-col justify-start">
                    <p className="text-lg">Hotel name</p>
                    <p className="text-sm">Location</p>
                </div>
                <div className="w-[30%] flex justify-end">
                    <button className="bg-orange-600 px-[40px] py-[10px] rounded-lg">Book</button>
                </div>
            </div>
        </div>
    );
}