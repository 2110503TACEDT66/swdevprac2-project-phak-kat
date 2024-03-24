import GgLogInButton from "@/components/GgLogInButton";
import HotelTextField from '@/components/HotelTextField'
import LogInButton from "@/components/LogInButton";
import Link from "next/link";

export default function SignUp() {
    return (
      <main className="w-full flex flex-col justify-center space-y-6">
        <h1 className='mx-auto mt-12 text-3xl font-sans font-bold
        text-stone-900'>
          Sign Up
        </h1>
        <form className="w-full flex flex-col justify-center space-y-6">
          <div className="w-1/2 mx-auto">
            <div className="space-y-4">
              <HotelTextField type='text' id="name" pText='name' lable='name' disable={false}/>
              <HotelTextField type='text' id="email" pText='email' lable='email' disable={false}/>
              <HotelTextField type='password' id="password" pText='password' lable='password' disable={false}/>
              <HotelTextField type='text' id="tel" pText='0xx-xxxxxxx' lable='phone number' disable={false}/>
            </div>
            <div className='text-sm font-medium text-neutral-800 font-sans
            flex flex-row space-x-2 justify-end mt-2'>
              <h6>Already have an account?</h6>
              <Link href={'/login'} className="underline">
                Log In
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <LogInButton buttonText="sing up"/>
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <hr className="w-48 h-0.5 my-auto bg-neutral-800 border-0 rounded"/>
            <h6 className='text-sm font-medium text-neutral-800 font-sans'>or</h6>
            <hr className="w-48 h-0.5 my-auto bg-neutral-800 border-0 rounded"/>
          </div>
          <div className="mx-auto">
            <GgLogInButton/>
          </div>
        </form>
      </main>
    );
}