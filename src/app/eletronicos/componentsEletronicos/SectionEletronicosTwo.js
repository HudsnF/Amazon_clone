import { AiOutlineAudio } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { ImTablet } from "react-icons/im";
import { MdComputer } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

export default function SectionEletronicosTwo(){
    return(
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold mb-4">Eletrônicos e Tecnologia</h1>
            <div className=" flex flex-wrap justify-center gap-x-2 border-b pb-6 border-gray-300">
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Ofertas</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Casa Inteligente</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Celulares e Comunicação</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Computadores e Informática</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Tv e Cinema em Casa</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Câmeras e Acessórios</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Áudio e Som</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">PC Gaming</a>
                <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">instrumentos Musicas</a>
                <p>Compre em até 10x sem juros</p>
            </div>
            <div className="flex justify-around mt-10">
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer bg-neutral-100 p-8 text-neutral-500">
                    <MdComputer size={60} />
                    <p>Computadores e Informática</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer bg-neutral-100 p-8 text-neutral-500">
                    <BsPhone size={60} />
                    <p>Celulares e Comunicação</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer bg-neutral-100 p-8 text-neutral-500">
                    <PiTelevisionSimpleBold size={60} />
                    <p>Tv e Cinema em Casa</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer bg-neutral-100 p-8 text-neutral-500">
                    <AiOutlineAudio size={60} />
                    <p>Áudio e Som</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer bg-neutral-100 p-8 text-neutral-500">
                    <ImTablet size={60} />
                    <p>Tablets</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer bg-neutral-100 p-8 text-neutral-500">
                    <BiHeadphone size={60} />
                    <p>PC Gamer</p>
                </div>
            </div>
        </div>
    )
}