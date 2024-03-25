'use client';
import React, { useEffect, useState } from 'react';
import MenuItem from "./MenuItem";
import Image from "next/image";

export default function MenuBar() {
    const [logIn, setLogIn] = useState('log in');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLogIn('log out');
        } else {
            setLogIn('log in');
        }
    }, []);

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
                <MenuItem title={logIn} pageRef='/login'/>
            </div>
        </div>
    );
}
