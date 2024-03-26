'use client'
import Image from "next/image";
import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function MyBooking() {
    const bookItems = useAppSelector((state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          My Booking
        </h1>
        <div className="flex flex-col space-y-6">
          {
            bookItems.map((BookingItem)=> (
              <div className="h-48 w-3/4 mx-auto flex flex-row
              font-sans bg-neutral-100 rounded-lg shadow-md
              hover:shadow-lg transition ease-in-out delay-150 duration-300 hover:scale-105">
                  <Image src={ '/img/test.jpg' } alt={BookingItem.hotel}
                      width={0} height={0} sizes="100vw"
                      className="rounded-lg w-2/5 h-full object-none object-center"/>
                  
                  <div className="w-3/5 px-12 py-7 flex flex-col space-y-1
                  lg:flex-row lg:justify-between">
                      <div className="lg:self-center">
                          <div className="flex flex-row space-x-3">
                              <i style={{'font-size':'25px'}} className="fi fi-sr-building"></i>
                              <div className="text-2xl font-semibold text-neutral-800 top-0">{BookingItem.hotel}</div>
                          </div>
                          <div className="flex flex-row space-x-3">
                              <i style={{'font-size':'18px'}} className="fi fi-sr-calendar-day"></i>
                              <div className="text-md font-semibold text-neutral-800 top-0">{`${BookingItem.startTime} - ${BookingItem.EndTime}`}</div>
                          </div>
                          {/* <div className="flex flex-row space-x-3">
                              <i style={{'font-size':'18px'}} className="fi fi-sr-phone-call"></i>
                              <div className="text-md font-semibold text-neutral-800 top-0">{'085-0936500'}</div>
                          </div> */}
                      </div>
      
                      <div className="flex flex-row space-x-4 mr-auto
                      lg:flex-col lg:space-y-4 lg:my-auto lg:mr-0 lg:self-center">
                          <Link href={'/book'}>
                              <div className="px-6 py-1.5 max-w-28 ml-auto text-center
                                  rounded-full bg-neutral-800 shadow-lg
                                  text-white text-md font-sans font-normal
                                  transition ease-in-out delay-150 duration-300 
                                  hover:scale-105 hover:text-md">
                                  <div className="flex flex-row space-x-3">
                                      <i style={{'font-size':'18px'}} className="fi fi-sr-file-edit"></i>
                                      <div className="text-md font-semibold text-neutral-100 top-0">edit</div>
                                  </div>
                              </div>
                          </Link>
                          <div className="px-6 py-1.5 max-w-28 ml-auto text-center
                              rounded-full bg-neutral-800 shadow-lg
                              text-white text-md font-sans font-normal
                              transition ease-in-out delay-150 duration-300 
                              hover:scale-105 hover:text-md">
                              <div className="flex flex-row space-x-3">
                                  <i style={{'font-size':'18px'}} className="fi fi-sr-trash"></i>
                                  <div className="text-md font-semibold text-neutral-100 top-0"
                                  onClick={()=>dispatch(removeBooking(BookingItem))}>delete</div>
                              </div>
                          </div>
                      </div>
      
                  </div>
              </div>
            ))
          }
        </div>
      </main>
    );
  }
  // <BookingCard params={{id:'string'}}/>