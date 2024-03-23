'use client'
import Image from 'next/image'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import { useReducer } from 'react'
import Hospital from '@/app/(hospitalinfo)/hospital/page'
import Link from 'next/link'


export default function CardPanel() {
    const stateRating = (
        ratingList:Map<string, number>,
        action: {type:string, hospitalName:string, rating:number}
    ) => {
        switch(action.type) {
            case 'rate': {
                return new Map(ratingList.set(action.hospitalName, action.rating))
            }
            case 'remove' : {
                ratingList.delete(action.hospitalName)
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }
    const [ratingList, dispatchRating] = useReducer(stateRating, new Map([
        ['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5]
    ]));

    // mock data
    const mockData = [
        {hid: '001', name: 'Chulalongkorn Hospital', img: '/img/chula.jpg'},
        {hid: '002', name: 'Rajavithi Hospital', img: '/img/rajavithi.jpg'},
        {hid: '003', name: 'Thammasat University Hospital', img: '/img/thammasat.jpg'}
    ]

   
    return (
        <div>
            <div style={{margin:"20px", display:"flex", 
                flexDirection: "row", alignContent: "space-around", 
                justifyContent: "space-around", flexWrap: "wrap"}}>
                    {
                        mockData.map((hospitalItem)=>(
                            <Link href={`/hospital/${hospitalItem.hid}`} className='w-1/5'>
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.img} rating={ratingList.get(hospitalItem.name) || 0}
                            onRating={(hospital: string, value: number) => dispatchRating({ type: 'rate', hospitalName: hospital, rating: value })} 
                            />
                            </Link>
                        ))
                    }
            </div>
            <div className='container mx-auto text-center'>
                {Array.from(ratingList).map(([hospital, rating]) =>
                    <div key={hospital} data-testid={hospital} onClick={() => dispatchRating({ type: 'remove', hospitalName: hospital, rating: 0 })}>
                        {hospital} {rating}
                    </div>
                )}
            </div>
        </div>
    );
}