import HotelPanel from '@/components/HotelPanel'
import LogInTextField from '@/components/TextField'
import HotelCard from '@/components/hotelCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-16">
      <div className='text-left text-xl px-10 pt-10 font-large font-sans'>Find Hotel of Your Choice</div>
      <HotelPanel/>
    </main>
  )
}
