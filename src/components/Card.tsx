'use client'
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Card({
   hospitalName,
   imgSrc,
   rating,
   onRating,
 }: {
   hospitalName: string;
   imgSrc: string;
   rating?: number;
   onRating?: Function;
 }) {
   const [value, setValue] = useState<number>(rating || 0);
 
   useEffect(() => {
     setValue(rating || 0);
   }, [rating]);

   let hidRatting = ''
   if(rating==null) {hidRatting='hidden'}
 
   return (
     <InteractiveCard>
       <div className={`w-full h-[70%] relative rounded-t-lg`}>
         <div className={styles.cardimg}>
           <Image
             src={imgSrc}
             alt="hospital1"
             fill={true}
             objectFit="cover"
           />
         </div>
         <div className={styles.cardText}>{hospitalName}</div>
         <Rating
           id={`${hospitalName} Rating`}
           name={`${hospitalName} Rating`}
           data-testid={`${hospitalName} Rating`}
           value={value}
           onChange={(e, newVal) => {
             setValue(newVal || 0);
             e.stopPropagation();
             if (onRating) {
               onRating(hospitalName, newVal);
             }
           }}
           onClick={(e) => e.preventDefault()}
           className={hidRatting}
         />
       </div>
     </InteractiveCard>
   );
 }
 