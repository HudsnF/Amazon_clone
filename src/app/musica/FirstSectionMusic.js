import { AiFillPlayCircle } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

export default function FirstSectionMusic() {
    return (
        <>
            <div className="bg-gray-100 text-xs py-2 px-4 flex">
                <div className="flex items-center gap-4">
                    <a className="cursor-pointer text-2xl mr-10 border-r pr-6"><span className="font-bold underline">amazon</span> music</a>
                    <a className="cursor-pointer hover:border-b hover:border-orange-500 flex items-center gap-1 text-gray-700">Amazon Music Unlimited <BiSolidDownArrow size={6} /></a>
                    <a className="cursor-pointer hover:border-b hover:border-orange-500 flex items-center gap-1 text-gray-700">Amazon Music Prime <BiSolidDownArrow size={6} /></a>
                    <a className="cursor-pointer hover:border-b hover:border-orange-500 flex items-center gap-1 text-gray-700">Amazon Music Free <BiSolidDownArrow size={6} /></a>
                    <a className="cursor-pointer hover:border-b hover:border-orange-500 flex items-center gap-1 text-gray-700">Loja de Música <BiSolidDownArrow size={6} /></a>
                </div>
                <div className="flex items-center justify-end w-2/5 gap-4">
                    <a className="cursor-pointer hover:border-b hover:border-orange-500 flex items-center gap-1 text-gray-700"><AiFillPlayCircle size={40} className="text-sky-500" /> Abrir o Web Player</a>
                    <a className="cursor-pointer hover:border-b hover:border-orange-500 text-gray-700">Confirgurações</a>
                </div>
            </div>
            <div className="bg-gradient-radial from-sky-300 to-purple-400 p-36 flex flex-col items-center justify-center">
                <h1 className="cursor-pointer text-2xl mb-4"><span className="font-bold underline">amazon</span> music <span className="font-semibold text-sm bg-black text-sky-500 p-1">prime</span></h1>
                <p className="text-5xl text-center font-extrabold mb-4">Todas as músicas e os melhores podcasts, sem anúncios</p>
                <p className="text-3xl mb-4">Incluído na sua assinatura Prime</p>
                <button className="flex items-center gap-1 font-semibold bg-yellow-300 hover:bg-yellow-200 p-3 px-5 rounded-full"><BiSolidRightArrow /> Ouça agora</button>
            </div>
        </>
    )
}