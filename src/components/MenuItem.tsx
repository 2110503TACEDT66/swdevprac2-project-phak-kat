import Link from 'next/link'

export default function MenuItem({title, pageRef}: 
    {title:string, pageRef:string}) {
        return (
            <Link href={pageRef}
            className='text-center px-5 py-1 mx-2 my-auto
            rounded-full
            text-white text-md font-sans font-medium
            hover:bg-stone-300 hover:text-stone-600 hover:font-medium
            active:bg-amber-50 active:text-stone-800 active:font-medium
            active:shadow-inner active:shadow-lg'
            >
                {title}
            </Link>
        );
}