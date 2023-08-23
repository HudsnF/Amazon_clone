import Image from "next/image";

export default function FirstSectionLerGratis() {
    return (
        <>
        
            <div className="bg-gray-200 text-xs py-2 px-4 ">
                <a className="cursor-pointer  font-semibold border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Loja Kindle</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Promoção Kindle</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Categorias</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Kindle Unlimited</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Prime Reading</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Comprar Kindle</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Acessórios</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">App Kindle</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">eBooks Mais Vendidos</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Novidades</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Volta às aulas</a>
                <a className="cursor-pointer border-b hover:border-orange-500 hover:text-orange-500 p-1 px-3">Dispositivos e conteúdo</a>
            </div>
            <div className="flex justify-between gap-20 bg-neutral-950">
                <div className="pt-10 pl-10">
                    <h1 className="text-6xl text-white pb-4 tracking-tighter"><span className="text-orange-500">kindle</span>unlimited</h1>
                    <button className="p-3 px-12 shadow-sm shadow-white rounded-md bg-yellow-400 hover:bg-yellow-300 font-bold">Entrar</button>
                </div>
                <Image src="/lergratis.jpg" width={600} height={300} />
            </div>
           
        </>
    )
}