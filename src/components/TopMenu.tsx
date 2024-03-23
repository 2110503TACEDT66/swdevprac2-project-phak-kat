import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
   return (
      <div className={styles.menuContainer}>
         <TopMenuItem title='Vaccine Booking' pageRef='/booking'/>
         <Image src={'/img/logo.png'} className={styles.logoimg}
         alt='logo' width={0} height={0} sizes='100vh'/>
      </div>
   );
}