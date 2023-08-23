import { AiFillLike, AiFillTag, AiOutlinePercentage, AiTwotoneTags } from "react-icons/ai";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { GiBookshelf, GiStarsStack } from "react-icons/gi";
import { BiSolidRightArrow } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";


export default function SectionLivrosOne() {
    return (
        <>
            <div className="text-center p-6">
                <h1 className="text-2xl font-bold mb-4">Lojas de Livros</h1>
                <div className=" flex flex-wrap justify-center gap-x-2 border-b pb-6 border-gray-300">
                    <h2>Veja também:</h2>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Livros em Oferta</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Mais Vendidos</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Lançamentos</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Indicações</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Box e Coleções</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Livros Exclusivos</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Livros Internacionais</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">HQs e Mangás</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Livros Infantis</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Universitários</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Didáticos e Escolares</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">Lojas e eBooks</a>
                    <a className="text-sky-700 cursor-pointer hover:underline hover:text-orange-500 pr-2 border-r border-gray-600">eBooks em Oferta</a>
                </div>
            </div>
            <div className="flex justify-around text-gray-800 mx-4 mb-6">
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer">
                    <AiOutlinePercentage size={30} />
                    <p>Livros em oferta</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer">
                    <AiFillTag size={30} />
                    <p>Mais vendidos</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer">
                    <BsFillBoxSeamFill size={30} />
                    <p>Lançamentos</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer">
                    <AiFillLike size={30} />
                    <p>Indicações</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer">
                    <GiBookshelf size={30} />
                    <p>Box e Coleções</p>
                </div>
                <div className="flex flex-col items-center text-xs font-bold gap-2 cursor-pointer">
                    <GiStarsStack size={30} />
                    <p>Livros exclusivos</p>
                </div>
            </div>
            <div>
                <div className="bg-blue-400 flex justify-center p-8 gap-16 mb-6">
                    <div className="text-gray-700 text-3xl cursor-pointer">
                        <h1 className="font-bold">Ofertas em Livros e eBooks </h1>
                        <p className="bg-yellow-300 px-2 rounded-md">Universitários e Profissionais</p>
                    </div>
                    <button className="flex items-center gap-2 text-white underline font-semibold">Compre agora <BiSolidRightArrow /></button>
                </div>
                <div className="bg-orange-300 flex items-center justify-center p-8 gap-16 cursor-pointer">
                    <h1 className="text-3xl font-bold text-white bg-gray-800 p-4">Saldão do Cliente</h1>
                    <div className="text-gray-800">
                        <p className="text-3xl font-bold mb-2">Milhares de itens em liquidação </p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><CiDeliveryTruck /> Frete GRÁTIS Prime</p>
                            <p className="flex items-center gap-2"> <AiTwotoneTags />Até 10x sem juros</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}