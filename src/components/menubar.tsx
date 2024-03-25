'use client';
import React, { useEffect, useState } from 'react';
import MenuItem from "./MenuItem";
import Image from "next/image";
import { getServerSession } from 'next-auth'

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
                    <div className='flex flex-row justify-end'>
                        <MenuItem title='Log In' pageRef='/login'/>
                    </div> 
                    :
                    <div className='flex flex-row justify-end'>
                        <MenuItem title='Log Out' pageRef='/logout'/>
                    </div>
            }
        </div>
    );
}
