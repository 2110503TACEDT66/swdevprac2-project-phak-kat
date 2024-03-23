import Link from 'next/link'

export default function MenuItem({title, pageRef}: 
    {title:string, pageRef:string}) {
        return (
            <Link href={pageRef}
            className='text-center mx-5 my-auto text-white'>
                {title}
            </Link>
        );
}