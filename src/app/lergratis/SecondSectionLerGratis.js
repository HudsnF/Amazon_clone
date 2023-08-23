import { BsBook } from 'react-icons/bs'
import { BiDevices } from 'react-icons/bi'
import Image from "next/image";


export default function SecondSectionLerGratis() {
    return (
        <>
            <div className="flex items-center justify-evenly py-3 px-12 text-center">
                <div className="flex flex-col items-center justify-center w-3/12">
                    <div className="text-orange-500 border-4 border-orange-500 rounded-full p-5 mb-4" >
                        <BsBook size={80} />
                    </div>
                    <p className="text-xl text-neutral-800">Leia à vontade</p>
                    <p className="text-neutral-500">Mais de um milhão de títulos para você escolher.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-3/12">
                    <div className="text-orange-500 border-4 border-orange-500 rounded-full p-5 mb-4" >
                        <BiDevices size={80} />
                    </div>
                    <p className="text-xl text-neutral-800">Leia onde quiser</p>
                    <p className="text-neutral-500">Baixe os aplicativos gratuitos de leitura Kindle e leia em qualquer dispositivo</p>
                </div>
            </div>
            <div>
                <img src="/paginakindle.jpg" />
            </div>
            <div className="text-neutral-500 pt-8 font-light">
                <div className="text-center">
                    <h1 className="text-neutral-700 text-5xl mb-6">Leia em qualquer dispositivo</h1>
                    <h2 className="text-neutral-600 text-3xl mb-6">Leve histórias incríveis para qualquer lugar</h2>
                </div>
                <div className="flex justify-between items-center pr-8">
                    <div>
                        <Image src="/kindle4.jpg" width={800} height={400} />
                    </div>
                    <div className="w-2/5 p-16 text-lg  font-extralight">
                        <h2 className="text-3xl mb-6">Baixe eBooks diretamente do seu aplicativo Kindle</h2>
                        <p>Você não precisa de um dispositivo Kindle para aproveitar o programa Kindle Unlimited. Com os aplicativos gratuitos Kindle, você pode baixar os eBooks do programa a qualquer momento e em qualquer lugar.</p>
                    </div>
                </div>
            </div>
        </>
    )
}