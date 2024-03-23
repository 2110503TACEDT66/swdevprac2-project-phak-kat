'use client'
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HotelDetail({params} : {params:{id:string}}) {
    return (
        <main className="text-center p-5">
            <div className="flex flex-row mb-5 justify-around content-around flex-wrap">
                    <Image src={ '/img/test.jpg' } alt={params.id}
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                    <Image src={ '/img/test.jpg' } alt={params.id}
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                    <Image src={ '/img/test.jpg' } alt={params.id}
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
            </div>
            <div className="text-left mx-5 font-sans">                
                <div className="text-3xl font-semibold">{ 'Name' }</div>
                <div className="flex flex-row">
                    <Rating size="medium" value={3.5} precision={0.5}/>
                    <p className="px-2">3.5/5</p>
                </div>
                <div className="text-xl pt-3">Tel.: { "tel" }</div>
                <div className="text-xl pt-3">Capacity: { "4" }</div>
                <div className="text-xl pt-3">Price: { "1000" }</div>
                <div className="text-xl pt-3">Address: { "address" }</div>
                <div className="flex justify-end ">
                <Link href='/book'>
                    <div className="bg-gray-300 px-5 py-1 rounded-lg font-sans 
                    hover:bg-gray-600">Book</div>
                </Link>
                </div>
            </div>
        </main>
    );
}