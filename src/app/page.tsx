import HotelPanel from '@/components/HotelPanel'
import HotelCard from '@/components/HotelCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='text-left text-xl px-10 pt-10 font-bold font-sans'>Find Hotel of Your Choice</div>
      <HotelPanel/>
    </main>
  )
}
