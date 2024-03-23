import styles from './topmenu.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TopMenuItem({title, pageRef}: {title:string, pageRef:string}) {
   return (
      <Link className={`${styles.itemContainer} hover:bg-sky-100`} href={pageRef}>
         {title}
      </Link>
   );
}