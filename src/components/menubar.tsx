import { getServerSession } from "next-auth";
import MenuItem from "./MenuItem";
import Image from "next/image";
import Link from "next/link";

export default async function MenuBar() {
    const session = await getServerSession();

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
            {
                session ? 
                    <Link className="bg-gray-300 px-auto py-auto  rounded-lg font-sans hover:bg-gray-600 h-full flex justify-end " href='/api/auth/signout'>
                        Log out
                    </Link>
                    :
                    <div>
                    <Link href='/api/auth/signin' className="bg-gray-300 px-auto py-auto  rounded-lg font-sans hover:bg-gray-600 h-[50%] flex justify-end px-5" >
                        Log in
                    </Link>
                    <Link href='/signup' className="bg-gray-300 px-auto py-auto  rounded-lg font-sans hover:bg-gray-600 h-[50%] flex justify-end px-5" >
                        Sign up
                    </Link>
                    </div>
            }
        </div>
    );
}
