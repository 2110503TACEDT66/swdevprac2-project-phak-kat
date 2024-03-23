'use client'

import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
   const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg',
                  '/img/cover4.jpg']
   const [index, setIndex] = useState(0)

   return (
      <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
         <Image src={covers[index%4]} 
         alt='cover'
         fill={true}
         priority
         objectFit='cover' />
         <div className={styles.bannerText}>
            <h1 className='text-4xl font-sans font-bold tracking-widest' style={{color: 'whitesmoke'}}>Vaccine Service Center</h1>
            <br></br>
            <p className='text-xl font-sans' style={{color: 'whitesmoke'}}>We offer easy access to COVID-19 vaccines and information on all recommended immunizations. Find a nearby provider, get clear answers to your questions, and take control of your health. Visit us today and join the fight for a healthier tomorrow!</p>
         </div>
      </div>
   );
}