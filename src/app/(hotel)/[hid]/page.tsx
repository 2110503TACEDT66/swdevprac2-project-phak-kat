import Image from "next/image";

export default function HotelDetail({params} : {params:{id:string}}) {
    return (
        <main className="text-center p-5 mt-16">
        <div className="flex flex-row my-5">
            <Image src={ '/img/test.jpg' }
            alt={params.id}
            width={0} height={0} sizes="100vw"
            className="rounded-lg w-[30%]"/>
            <div className="text-md mx-5 text-left">
                <div className="text-lg font-semibold">{ 'Name' }</div>
                <div className="text-md">Address: { "address" + ', ' + "district" + ', ' + "province"}</div>
                <div className="text-md">Tel.: { "tel" }</div>
            </div>
        </div>
    </main>
    );
}