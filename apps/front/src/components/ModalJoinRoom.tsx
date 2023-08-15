'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export function ModalCreateRoom({visibility}) {
    let router = useRouter()

    function wrapperClick(e){
        e.preventDefault()
        router.push('/')
    }

    function cardClick(e){
        e.stopPropagation()
    }

    return (
            <div onClick={wrapperClick} className={`${visibility ? 'opacity-1 visible' : 'opacity-0 invisible'} fixed z-1 w-screen h-screen transition-opacity duration-500 ease-out backdrop-blur-2xl flex items-center`}>
                <div onClick={cardClick} className='bg-white p-4 m-auto w-2/4 rounded flex justify-between items-center'>
                    <p className="text-black">Content</p>
                    <Link href='/' type='button' className='bg-blue-700 rounded p-2'>Close</Link>
                </div>
            </div>
    );
}
