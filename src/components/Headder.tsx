import styles from './header.module.css'

export default function Headder({title, pageRef}: {title:string, pageRef:string}) {
    return (
        <div className={styles.headerText}>
            <p className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>{title}</p>
        </div>
    );
}