'use client'

import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";

export default function Vendas() {
    return (
        <div>
            <Navbar />
            <div className="flex bg-neutral-100">
                <div className="flex flex-col items-start gap-10 p-24">
                    <p className="font-bold text-sm text-white bg-blue-700 py-2 px-9 rounded-md text-center">MEGA OFERTA POR TEMPO LIMITADO</p>
                    <p className="text-6xl font-extrabold text-gray-800 leading-snug">Venda na Amazon com mensalidade GRÁTIS por 1 ano</p>
                    <p className="w-4/5 text-gray-900">Aproveite todos os benefícios de vender na Amazon com <span className="font-semibold">mensalidade GRÁTIS por 1 ano.</span></p>
                    <button className="bg-orange-500 py-4 px-10 rounded-full tracking-wide text-2xl font-semibold text-gray-800">Comece a vender</button>
                </div>
                <div className="mr-20 p-24">
                    <Image src="/vendanaamazon.png" width={400} height={400}/>
                </div>
            </div>
            <Footer />
        </div>

    )
}