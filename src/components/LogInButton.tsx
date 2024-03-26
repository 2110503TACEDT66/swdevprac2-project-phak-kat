'use client';
import userLogIn from "@/libs/userLogIn";
import { sign } from "crypto";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function LogInButton() {

    const onSubmit = async () => {
        const response = await signIn('credentials', {
            email: (document.getElementById('email') as HTMLInputElement).value,
            password: (document.getElementById('password') as HTMLInputElement).value,
            redirect: true,
            callbackUrl: 'http://localhost:3000/'
        });
    }

    return (
        <div className='w-full'>
            <input type="submit"
            className="px-6 py-2 
            rounded-full bg-neutral-800 shadow-lg
            text-white text-md font-sans font-normal
            transition ease-in-out delay-150 duration-300 
            hover:scale-105 hover:text-md"
            onClick={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            />
        </div>
    );
}