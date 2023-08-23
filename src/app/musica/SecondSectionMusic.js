import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

export default function SecondSectionMusic() {
    return (
        <>
            <div className="bg-neutral-800 text-neutral-100 font-semibold text-center text-xl py-9">
                <p>Quer trocar de música quantas vezes quiser + áudio espacial e em HD? <span className="font-bold">Experimente o <span className="underline text-purple-200 cursor-pointer">Amazon Music Unlimited</span></span></p>
            </div>
            <div className="flex justify-around items-center p-24">
                <p className="font-bold text-xl w-1/5 border-l border-sky-500 pl-4">Todas as músicas sem anúncios</p>
                <p className="font-bold text-xl w-1/5 border-l border-sky-500 pl-4">Os melhores podcasts sem anúncios</p>
                <p className="font-bold text-xl w-1/5 border-l border-sky-500 pl-4">Descubra novas músicas e podcasts baseados no que você gosta</p>
                <p className="font-bold text-xl w-1/5 border-l border-sky-500 pl-4">Reproduza qualquer artista, álbum ou playlist no modo aleatório</p>
            </div>
            <div className="bg-sky-400 p-10 text-center text-xl">
                <p>Aproveite o Amazon Music ao máximo em qualquer lugar com o app. <span className="underline cursor-pointer">Ouça agora</span></p>
            </div>
            <div className="flex flex-col items-center bg-gradient-radial from-sky-300 to-purple-400 p-12 gap-4 mb-8">
                <button className="flex items-center gap-1 font-semibold bg-yellow-300 hover:bg-yellow-200 p-3 px-5 rounded-full"><BiSolidRightArrow /> Ouça agora</button>
                <p className="font-semibold">Expandimos nosso catálogo para membros Prime de 2 milhões para mais de 100 milhões de músicas.</p>
            </div>
        </>
    )
}