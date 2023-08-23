'use client'

import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";
import { BiSolidRightArrow } from 'react-icons/bi'

export default function Prime() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-between border-t-2 border-blue-500 bg-gray-800 text-neutral-100">
                <div className="pl-20 pt-8 w-2/5">
                    <h1 className="text-2xl font-bold mb-4">Frete GRÁTIS e entretenimento com o Amazon Prime</h1>
                    <p className="mb-4 font-light">Aproveite frete GRÁTIS e rápido, filmes, séries, músicas e muito mais por apenas R$ 14,90/mês ou R$ 119,00/ano, dependendo do plano escolhido.</p>
                    <button className="bg-yellow-400 border-2 border-orange-700 hover:bg-yellow-500 text-gray-700 text-sm font-bold py-4 px-20 rounded-md mb-2">TESTE GRÁTIS POR 30 DIAS</button>
                    <p className="text-sm font-thin w-3/4 mb-4">Após o período de teste, o Amazon Prime custará R$ 14,90/mês ou R$ 119,00/ano, dependendo do plano escolhido. Cancele a qualquer momento.</p>
                    <p className="text-3xl font-bold mb-8"><span className="border-b-2 border-white">amazon</span> prime</p>
                </div>
                <Image src="/popcorn.jpg" width={500} height={400} />
            </div>
            <div className="flex items-center justify-between pr-20 bg-sky-500 text-white">
                <div className="w-4/6 px-20">
                    <h1 className="text-5xl font-light pb-4">Frete GRÁTIS para milhões de produtos</h1>
                    <p className="w-3/5 text-lg font-light pb-2"><span className="font-bold">Frete GRÁTIS</span>  para milhões de produtos elegíveis ao Amazon Prime. Verifique o prazo de entrega para sua região.</p>
                    <a className="flex items-center gap-2 cursor-pointer hover:underline">Saiba mais sobre a entrega Prime <BiSolidRightArrow size={10} /></a>
                </div>
                <Image src="/pacote.png" width={400} height={400} />
            </div>
            <div className="flex justify-center items-center gap-40 p-20 text-gray-900">
                <Image src="/theboys.jpg" width={300} height={100} className="shadow-md shadow-black" />
                <div className="w-2/4">
                    <h1 className="text-5xl font-light pb-4">Acesso exclusivo aos conteúdos Amazon Originals</h1>
                    <p className="text-lg font-light pb-2 w-4/6">Prime Video é o único lugar onde você pode assistir aos Amazon Originals como The Boys, Little Fires Everywhere, Upload e Hanna.</p>
                    <a className="flex items-center gap-2 font-semibold cursor-pointer hover:underline">Saiba mais sobre a entrega Prime <BiSolidRightArrow size={10} /></a>
                </div>
            </div>
            <div className="flex items-center justify-between pr-20 py-10 bg-sky-500 text-gray-800">
                <div className="w-5/6 px-20">
                    <h1 className="text-5xl font-light pb-4">Acesso a mais de mil
                        eBooks e revistas</h1>
                    <p className="w-3/5 text-lg font-light pb-2">Como membro Prime, você pode ler Interestelar, Desperte a sua vitória, O clã dos magos e outras centenas de eBooks; e revistas como Recreio, Aventuras na História e diversas outras opções.</p>
                    <a className="flex items-center gap-2 cursor-pointer hover:underline">Saiba mais sobre a entrega Prime <BiSolidRightArrow size={10} /></a>
                </div>
                <Image src="/ebooks.jpg" width={400} height={400} />
            </div>
            <div className="flex items-center justify-between pr-20 text-gray-800">
                <div className="w-4/6 px-20">
                    <h1 className="text-5xl font-light pb-4">Loot e jogos sem custo adicional</h1>
                    <p className="w-3/5 text-lg font-light pb-2">Todos os meses, membros Prime podem aproveitar uma seleção de jogos para download permanente, sem custo adicional, e uma experiência premium na Twitch</p>
                    <a className="flex items-center gap-2 cursor-pointer hover:underline">Saiba mais sobre a entrega Prime <BiSolidRightArrow size={10} /></a>
                </div>
                <Image src="/game.png" width={400} height={400} />
            </div>
            <div className="flex items-center justify-center p-20 bg-sky-500 text-white">
                <Image src="/deliver.png" width={200} height={200} />
                <div className="w-4/6 px-20 text-center">
                    <h1 className="text-3xl font-light pb-4">Uma assinatura, muitos benefícios.</h1>
                    <button className="bg-yellow-400 border-2 border-orange-700 hover:bg-yellow-500 text-gray-700 text-sm font-bold py-4 px-20 rounded-md mb-2">TESTE GRÁTIS POR 30 DIAS</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}