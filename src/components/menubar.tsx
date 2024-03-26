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
                    <Link href='/api/auth/signout'className='ml-4 text-sm font-semibold text-red-500'>
                        Log out
                    </Link>
                    :
                    <div>
                    <Link href='/api/auth/signin' className='ml-4 text-sm font-semibold text-blue-500'>
                        Log in
                    </Link>
                    <Link href='/signup' className='ml-4 text-sm font-semibold text-blue-500'>
                        Sign up
                    </Link>
                    </div>
            }
        </div>
    );
}
