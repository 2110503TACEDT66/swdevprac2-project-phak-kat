'use client'
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HotelDetail({params} : {params:{id:string}}) {
    return (
        <main className="p-12 font-sans flex flex-col space-y-5">
            <div className="flex flex-row h-60 mb-3.5
            justify-start space-x-5">
                    <Image src={ '/img/test.jpg' } alt={params.id}
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-auto h-full"/>
                    <Image src={ '/img/test.jpg' } alt={params.id}
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-auto h-full"/>
                    <Image src={ '/img/test.jpg' } alt={params.id}
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-auto h-full"/>
            </div>

            <div className="flex flex-row justify-start space-x-5">
                <h1 className='text-3xl font-sans font-bold text-stone-900'>
                    {"Hotel's Name"}
                </h1>
                <div className="flex flex-row mt-auto mb-1">
                    <Rating size="medium" value={3.5} precision={0.5}/>
                    <p className="px-2">3.5/5</p>
                </div>
            </div>

            <div className="flex flex-row space-x-60">
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-row space-x-3">
                        <i style={{'font-size':'20px'}} className="fi fi-ss-circle-phone "></i>
                        <div className="text-md font-medium text-neutral-800 top-0">{ "085-0936599" }</div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <i style={{'font-size':'20px'}} className="fi fi-sr-users-alt"></i>
                        <div className="text-md font-medium text-neutral-800 top-0">{ "4" } per room</div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <i style={{'font-size':'20px'}} className="fi fi fi-sr-sack-dollar"></i>
                        <div className="text-md font-medium text-neutral-800 top-0">{ "2,500" } $</div>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 w-96">
                    <div className="flex flex-col space-y-0.5">
                        <div className="flex flex-row space-x-3">
                            <i style={{'font-size':'20px'}} className="fi fi-sr-map-marker"></i>
                            <div className="text-md font-medium text-neutral-800 top-0">address</div>
                        </div>
                        <p className="text-sm font-normal text-neutral-800">
                            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit onsectetur adipiscing elit'}
                        </p>
                    </div>
                    <Link href='/book'
                    className="px-6 py-1.5 max-w-28 ml-auto text-center
                    rounded-full bg-neutral-800 shadow-lg
                    text-white text-md font-sans font-normal
                    transition ease-in-out delay-150 duration-300 
                    hover:scale-105 hover:text-md">
                        book
                    </Link>
                </div>
            </div>              
        </main>
    );
}