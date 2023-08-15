'use client'

import {useRouter} from "next/navigation";
import {FormEvent} from "react";

export function ModalCreateRoom({visibility}) {
    let router = useRouter()

    function wrapperClick(e) {
        e.preventDefault()
        router.push('/')
    }

    function cardClick(e) {
        e.stopPropagation()
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const name = String(formData.get('roomName'))
        const capacity = String(formData.get('capacity'))

        //Fetch

        router.push('/')
    }

    return (
        <div onClick={wrapperClick}
             className={`${visibility ? 'opacity-1 visible' : 'opacity-0 invisible'} fixed top-0 left-0 z-1 w-screen h-screen transition-opacity duration-500 ease-out backdrop-blur-2xl flex items-center`}>
            <div onClick={cardClick} className='modal m-auto w-2/3 md:w-2/5 gap-3 p-10'>
                <h1 className='text-5xl'>Créer un <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-900">salon</span>
                </h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <label htmlFor="roomName-input" className="block text-sm font-light text-gray-900 dark:text-white">Nom
                        du salon</label>
                    <input type="text" id="roomName-input" name="roomName"
                           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>

                    <label htmlFor="capacity-input" className="block text-sm font-light text-gray-900 dark:text-white">Capacité
                        du salon</label>
                    <input type="number" max="20" min="2" id="capcaity-input" name="capacity"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                    <button type='submit'
                            className='font-normal text-white bg-gradient-to-r from-blue-400 to text-black rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-center gap-2 mb-2 hover:shadow-blue-400 hover:shadow-[0_0_15px_0px]'>
                        Créer un salon
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}
