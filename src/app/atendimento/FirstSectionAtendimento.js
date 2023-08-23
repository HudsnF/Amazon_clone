import Image from "next/image";


export default function FirstSectionAtendimento() {

    return (

        <div className="bg-cyan-700 text-neutral-100">
            <div className="flex gap-6 text-sm font-semibold shadow-md shadow-cyan-800 py-3">
                <a className="ml-6 border-r pr-5 py-2 hover:underline cursor-pointer">Serviço de atendimento ao cliente</a>
                <a className="py-2 hover:underline cursor-pointer">Serviços digitais e Suporte a dispositivos</a>
            </div>
            <div className="px-4 py-12">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Você precisa de ajuda com um produto recente, Hudson?</h1>
                    <p className="text-lg font-semibold mb-5">Selecione o produto com o qual você precisa de ajuda abaixo ou obtenha ajuda com outra coisa
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-6 text-black">
                    <div className="flex items-center bg-white rounded p-4 gap-4 cursor-pointer ">
                        <Image src="/dispositivos.jpg" width={100} height={100} />
                        <div>
                            <p className="font-bold">Teclados</p>
                            <p className="text-xs text-neutral-500">Pedido em 19 de ago. de 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded p-4 gap-4 cursor-pointer">
                        <Image src="/games.jpg" width={100} height={100} />
                        <div>
                            <p className="font-bold">Controles de video-game</p>
                            <p className="text-xs text-neutral-500">Pedido em 20 de set. de 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded p-4 gap-4 cursor-pointer">
                        <Image src="/lergratis.jpg" width={100} height={100} />
                        <div>
                            <p className="font-bold">Livros</p>
                            <p className="text-xs text-neutral-500">Pedido em 30 de set. de 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded p-4 gap-4 cursor-pointer">
                        <Image src="/bebidas.jpg" width={100} height={100} />
                        <div>
                            <p className="font-bold">Bebidas</p>
                            <p className="text-xs text-neutral-500">Pedido em 10 de set. de 2023</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded p-4 gap-4 cursor-pointer">
                        <Image src="/beleza.jpg" width={100} height={100} />
                        <div>
                            <p className="font-bold">Maquiagens</p>
                            <p className="text-xs text-neutral-500">Pedido em 18 de set. de 2023</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded p-4 gap-4 cursor-pointer">
                        <Image src="/computadores.jpg" width={100} height={100} />
                        <div>
                            <p className="font-bold">Teclado Gamer</p>
                            <p className="text-xs text-neutral-500">Pedido em 28 de set. de 2023</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-6 w-1/4 text-sm">
                    <button className="bg-white text-black py-2 rounded-md">Ajuda com um produto diferente</button>
                    <button className="bg-white text-black py-2 w-3/4 rounded">Ajuda com outra coisa</button>
                </div>
            </div>
        </div>
    )
}