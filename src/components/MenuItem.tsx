import Link from 'next/link'

export default function MenuItem({title, pageRef}: 
    {title:string, pageRef:string}) {
        return (
            <Link href={pageRef}
            className='text-center px-5 py-1 mx-2 my-auto
            rounded-full
            text-hCream text-md font-serif font-light
            hover:bg-stone-400 hover:text-stone-600
            active:bg-hCream'>
                {title}
            </Link>
        );
}