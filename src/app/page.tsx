import HotelPanel from '@/components/HotelPanel'
import getHotels from '@/libs/getHotels'

export default async function Home() {
  const hotels = getHotels()
  return (
    <main className="flex min-h-screen flex-col">
      <div className='text-left text-xl px-10 pt-10 font-bold font-sans'>Find Hotel of Your Choice</div>
      <HotelPanel hotelsJson={hotels}/>
    </main>
  )
}
