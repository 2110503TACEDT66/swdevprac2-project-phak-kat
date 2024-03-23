import Link from 'next/link'

export default function MenuItem({title, pageRef}: 
    {title:string, pageRef:string}) {
        return (
            <Link href={pageRef}
            className='w-1/6 text-center mx-5 text-white'>
                {title}
            </Link>
        );
}