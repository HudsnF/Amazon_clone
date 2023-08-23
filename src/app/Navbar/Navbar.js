import Link from "next/link"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsCaretDownFill } from "react-icons/bs"
import { IoIosArrowForward } from "react-icons/io"

export default function Navbar() {
    return (
        <div className="text-white text-xs">
            <div className="bg-gray-900 h-auto flex items-center justify-around py-1 px-4">
                <div className="flex hover:border pb-2">
                    <Link href="/"><span className="text-3xl font-bold tracking-tighter border-b border-orange-500">amazon</span>.com.br</Link>
                </div>
                <div className="flex items-end cursor-pointer hover:border p-2">
                    <HiOutlineLocationMarker size={18} />
                    <div className="leading-3">
                        <p className="">Olá</p>
                        <p className="font-bold text-sm">Selecione o endereço</p>
                    </div>
                </div>
                <div className="w-3/6 px-4">
                    <div className="bg-neutral-100  rounded-md text-neutral-500 text-base flex justify-between items-center cursor-text">
                        <p className="p-2">Pesquisa Amazon.com.br</p>
                        <button className="bg-orange-300 hover:bg-orange-400 rounded-r-md p-2">
                            <AiOutlineSearch size={28} className="text-slate-900 " />
                        </button>
                    </div>
                </div>
                <div className="hover:border p-1">
                    <a href="#">
                        <p>Olá, faça seu login</p>
                        <p className="flex items-center font-extrabold gap-1">Contas e Listas <BsCaretDownFill size={8} /> </p>
                    </a>
                </div>
                <div className="hover:border p-1">
                    <p> Devolução <span className="flex font-extrabold">e Pedidos </span></p>

                </div>
                <div className="flex items-end hover:border p-1">
                    <AiOutlineShoppingCart size={40} />
                    <p className="flex font-bold text-sm">Carrinho</p>

                </div>
            </div>
            <div className="bg-gray-800 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 p-1">
                    <Link href="/vendas" className="hover:border p-2">Venda na Amazon</Link>
                    <Link href="/prime" className="flex items-center gap-1 hover:border p-2">Prime <BsCaretDownFill size={8} /></Link>
                    <Link href="/livros" className="hover:border p-2">Livros</Link>
                    <Link href="/musica" className="hover:border p-2">Música</Link>
                    <Link href="/eletronicos" className="hover:border p-2">Eletrônicos</Link>
                    <Link href="/atendimento" className="hover:border p-2">Atendimento ao Cliente</Link>
                </div>
                <div className="flex items-center hover:border text-xl p-1">
                    <Link href="/lergratis"><span className="font-semibold">+ 1 milhão</span> de títulos para <span className="font-semibold">ler de graça</span></Link>
                    <IoIosArrowForward size={24}/>
                </div>
            </div>
        </div >
    )
}