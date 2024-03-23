import MenuItem from "./MenuItem";
import Image from "next/image";

export default function MenuBar() {

    let logIn = ['log in', 'log out'];

    return (
        <div className='w-full h-16 fixed top-0 right-0 left-0 z-50 
        flex flex-row justify-between bg-neutral-800'>
            <div className='flex flex-row justify-start'>
                <Image src={'/img/icon-cream.svg'} 
                alt="icon" height={0} width={0}
                className="h-10 w-auto my-auto mx-2 " 
                />
                <MenuItem title='Home' pageRef='/'/>
                <MenuItem title='MyBooking' pageRef='/mybooking'/>
            </div>
            <div className='flex flex-row justify-end'>
                <MenuItem title={logIn[0]} pageRef='/login'/>
            </div>
        </div>
    );
}