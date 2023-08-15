import Link from "next/link";
import {ModalCreateRoom} from "@/components/ModalCreateRoom";
import Cube from "@/components/threejs/Cube";

type Props = {
    searchParams: Record<string, string> | null | undefined;
};

export default function Home({searchParams}: Props) {
    const showModalCreate = searchParams?.modalCreate;
    const showModalInvite = searchParams?.modalInvite;

    return (
        <section className={'grid md:grid-cols-2 h-screen container mx-auto'}>
            <div className={'flex flex-col justify-center text-center md:text-left gap-8 px-4 md:px-0'}>
                <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-900'>Bienvenue sur Caisse Noire</h1>
                <p className='text-3xl text-gray-100 font-light'>L'outil qui automatise la gestion de vos cagnottes !</p>
                <div className='flex flex-row gap-6'>
                    <Link href="/?modalCreate=true"
                          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm md:text-md lg:text-lg text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-gray-900 group-hover:from-gray-900 group-hover:to-blue-400 hover:text-white dark:text-white shadow-[0_1px_20px_1px_rgba(8,_112,_184,_0.7)]">
                          <span
                              className="font-light relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#1a1a1a] rounded-md group-hover:bg-opacity-0">
                              Créer un Salon
                          </span>
                    </Link>

                    <Link href="/?modalInvite=true"
                          className='font-light text-white bg-gradient-to-r from-blue-400 to text-black rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center mr-2 mb-2 hover:shadow-blue-400 hover:shadow-[0_0_15px_0px]'>
                        Rejoindre un Salon</Link>
                </div>

            </div>
            <div className="hidden md:block">
                <Cube />
            </div>
            <ModalCreateRoom visibility={showModalCreate}/>
            {/*{showModalInvite && <ModalCreateRoom />}*/}
        </section>
    )
}
