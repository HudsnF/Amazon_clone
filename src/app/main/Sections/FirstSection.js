import Image from "next/image"
import { TbTruckDelivery } from 'react-icons/tb'

export default function FirstSection() {
    return (
        <>
            <div className="flex items-center justify-center text-gray-800 py-4">
                <div className="w-2/6">
                    <h1 className="text-4xl font-bold">Ofertas em Eletrônicos para o paizão antenado</h1>
                    <p className="text-xl font-semibold">Dia dos Pais</p>
                    <p className="flex items-center gap-1 pt-4"><TbTruckDelivery size={26}/>Frete GRÁTIS</p>
                </div>
                <Image src="/background.png" width={400} height={300} />
            </div>

            <div className="flex justify-center p-2 pb-6 gap-8">
                <div className="bg-white w-80 py-6">
                    <h2 className="font-bold text-xl px-8 pb-4">Lojas de Compras Internacionais</h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="text-xs">
                            <Image src="/cozinha.jpg" width={140} height={120} />
                            <p>Cozinha</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/eletronicos2.jpg" width={140} height={120} />
                            <p>Eletrônicos</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/eletronicos.jpg" width={140} height={120} />
                            <p>Informática</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/beleza.jpg" width={140} height={120} />
                            <p>Beleza</p>
                        </div>
                        <a href="#" className="text-xs text-blue-600">Confira as ofertas internacionais</a>
                    </div>
                </div>
                <div className="bg-white w-80 py-6">
                    <h2 className="font-bold text-xl px-8 pb-4">Ofertas para o Dia dos Pais</h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="text-xs">
                            <Image src="/bebidas.jpg" width={140} height={120} />
                            <p>Bebidas Alcoólicas</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/casa.jpg" width={140} height={120} />
                            <p>Casa</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/diversao.jpg" width={140} height={120} />
                            <p>Diversão</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/moda.jpg" width={140} height={120} />
                            <p>Moda</p>
                        </div>
                        <a href="#" className="text-xs text-blue-600">Confira as ofertas internacionais</a>
                    </div>
                </div>
                <div className="bg-white w-80 py-6">
                    <h2 className="font-bold text-xl px-8 pb-4">Conheça os E-readers Kindle</h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="text-xs">
                            <Image src="/kindle1.jpg" width={140} height={100} />
                            <p>Kindle 11ª Geração</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/kindle2.jpg" width={140} height={100} />
                            <p>Kindle Paperwhite</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/kindle3.jpg" width={140} height={100} />
                            <p>Kindle Oasis</p>
                        </div>
                        <div className="text-xs">
                            <Image src="/kindle4.jpg" width={140} height={100} />
                            <p>Acessórios</p>
                        </div>
                        <a href="#" className="text-xs text-blue-600">Ver mais E-readers Kindle</a>
                    </div>
                </div>
                <div className="bg-white w-64 py-6">
                    <h2 className="font-bold text-xl px-8 pb-4">Frete GRÁTIS no seu primeiro pedido</h2>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-xs pb-8">
                            <Image src="/frete.jpg" width={240} height={100} />
                        </div>
                        <a href="#" className="text-xs text-blue-600">Confira as ofertas internacionais</a>
                    </div>
                </div>
            </div>
        </>
    )
}