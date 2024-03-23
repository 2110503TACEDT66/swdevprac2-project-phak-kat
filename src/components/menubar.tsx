import MenuItem from "./MenuItem";
import Image from "next/image";

export default function MenuBar() {
    return (
        <div className='w-full h-16 bg-black fixed top-0 right-0 left-0 z-50 flex flex-row justify-between'>
            <div className='flex flex-row justify-start'>
                <Image src={'/img/icon-white.svg'} 
                alt="icon" height={0} width={0}
                className="h-10 w-auto my-auto mx-2" 
                />
                <MenuItem title='Home' pageRef='/'/>
                <MenuItem title='MyBooking' pageRef='/mybooking'/>
            </div>
            <div className='flex flex-row justify-end'>
                <MenuItem title='LogIn' pageRef='/login'/>
            </div>
        </div>
    );
}