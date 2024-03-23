import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetail({params}: {params: {hid: string}}) {
    //mock data
    // const mockData = new Map()
    // mockData.set('001', {name: 'Chulalongkorn Hospital', img: '/img/chula.jpg'})
    // mockData.set('002', {name: 'Rajavithi Hospital', img: '/img/rajavithi.jpg'})
    // mockData.set('003', {name: 'Thammasat University Hospital', img: '/img/thammasat.jpg'})

    const hospitalDetail = await getHospital(params.hid)
    
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture}
                    alt='Hospital Picture'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black" />
                <div className="text-left mx-5 flex flex-col">
                    <div>{hospitalDetail.data.name}</div>
                    <div>{hospitalDetail.data.address}</div>
                    <div>{hospitalDetail.data.tel}</div>
                </div>
            </div>
        </main>
    );
}