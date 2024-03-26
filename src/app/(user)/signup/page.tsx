'use client';
import RegisterText from "@/components/RegisterText";
import LogInButton from "@/components/LogInButton";
import getHotel from '@/libs/getHotel';
import Link from 'next/link';
import { useState } from 'react';
import userRegister from "@/libs/userRegister";

export default function SignUp() {

    const [profileName, setProfileName] = useState<string>('');
    const [profileEmail, setProfileEmail] = useState<string>('');
    const [profilePassword, setProfilePassword] = useState<string>('');

    const makeRegister = async () => {
        if (!profileName || !profileEmail || !profilePassword) return;
    
        try {
            await userRegister(profileName, profileEmail, profilePassword, 'user');
            console.log("makeRegister success");
        } catch (error) {
            console.error("Error making register:", error);
        }
    };

    return (
        <main className="w-full flex flex-col justify-center space-y-6">
            <h1 className='mx-auto mt-10 text-3xl font-sans font-bold
            text-stone-900'>
            Register
            </h1>

            <form className="w-full flex flex-col justify-center space-y-5">
                
                <div className="space-y-3 w-1/2 mx-auto">
                <RegisterText value={profileName} type='text' id="name" pText={profileName} label='name' disable={false} onChangeText={(value: string) => {setProfileName(value)}}/>
                <RegisterText value={profileEmail} type='text' id="email" pText={profileEmail} label='eamil' disable={false} onChangeText={(value: string) => {setProfileEmail(value)}}/>
                <RegisterText value={profilePassword} type='password' id="password" pText={profilePassword} label='password' disable={false} onChangeText={(value: string) => {setProfilePassword(value)}}/>
                </div>
                
                <div className='mx-auto'>
                <button type='submit'
                onClick={ (e) =>
                    {
                        e.preventDefault();
                        makeRegister();
                    }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    submit
                </button>
            </div>

            </form>
        </main>
    );
}