import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

export default function SectionLivrosTwo() {
    return(
        <>
            <h1 className="text-gray-900 py-1 my-6 text-xl font-bold border-b border-gray-400">Os Lançamentos mais vendidos</h1>
            <div className="flex mb-20">
                <div className="w-1/5 flex flex-col items-center text-center">
                    <Image src="/livro1.jpg" width={100} height={100}/>
                    <p className="cursor-pointer hover:text-orange-500">Corte de espinhos e rosas (Vol.1)</p>
                    <p className="text-gray-500 text-sm">por Sarah J. Maas e Mariana Kohnert</p>
                    <p className="text-gray-500 text-sm">Capa comum</p>
                    <p className="text-gray-500 text-sm"><span className="text-black text-xs">R$</span><span className="text-black text-xl">33</span><span className="text-xs text-black">99</span> <span className="line-through">R$59,90</span></p>
                    <p className="text-blue-500 font-bold text-sm flex items-center"><BiCheck className="text-orange-500" size={18}/>prime</p>
                </div>
                <div className="w-1/5 flex flex-col items-center text-center">
                    <Image src="/livro2.jpg" width={98} height={100}/>
                    <p className="cursor-pointer hover:text-orange-500">Corte de névoa e fúria (Vol. 2 Corte de espinhos e rosas)</p>
                    <p className="text-gray-500 text-sm">por Sarah J. Maas e Mariana Kohnert</p>
                    <p className="text-gray-500 text-sm">Capa comum</p>
                    <p className="text-gray-500 text-sm"><span className="text-black text-xs">R$</span><span className="text-black text-xl">47</span><span className="text-xs text-black">99</span> <span className="line-through">R$79,90</span></p>
                    <div className="flex text-yellow-500">
                        <AiFillStar size={22}/>
                        <AiFillStar size={22}/>
                        <AiFillStar size={22}/>
                        <AiFillStar size={22}/>
                        <AiFillStar size={22}/>
                        <p className="text-black">(2.005)</p>
                    </div>
                    <p className="text-blue-500 font-bold text-sm flex items-center"><BiCheck className="text-orange-500" size={18} />prime</p>
                </div>
                <div className="w-1/5 flex flex-col items-center text-center">
                    <Image src="/livro3.jpg" width={100} height={100}/>
                    <p className="cursor-pointer hover:text-orange-500">Corte de asas e ruína (Vol. 3 Corte de espinhos e rosas)</p>
                    <p className="text-gray-500 text-sm">por Sarah J. Maas e Mariana Kohnert</p>
                    <p className="text-gray-500 text-sm">Capa comum</p>
                    <p className="text-gray-500 text-sm"><span className="text-black text-xs">R$</span><span className="text-black text-xl">51</span><span className="text-xs text-black">99</span> <span className="line-through">R$79,90</span></p>
                    <p className="text-blue-500 font-bold text-sm flex items-center"><BiCheck className="text-orange-500" size={18} />prime</p>
                </div>
                <div className="w-1/5 flex flex-col items-center text-center">
                    <Image src="/livro4.jpg" width={99} height={100}/>
                    <p className="cursor-pointer hover:text-orange-500">Corte de chamas prateadas (Vol. 4 Corte de espinhos e rosas)</p>
                    <p className="text-gray-500 text-sm">por Sarah J. Maas e Mariana Kohnert</p>
                    <p className="text-gray-500 text-sm">Capa comum</p>
                    <p className="text-gray-500 text-sm"><span className="text-black text-xs">R$</span><span className="text-black text-xl">53</span><span className="text-xs text-black">99</span> <span className="line-through">R$79,90</span></p>
                    <p className="text-blue-500 font-bold text-sm flex items-center"><BiCheck className="text-orange-500" size={18} />prime</p>
                </div>
                <div className="w-1/5 flex flex-col items-center text-center">
                    <Image src="/livro5.jpg" width={98} height={100}/>
                    <p className="cursor-pointer hover:text-orange-500">Corte de Gelo e Estrelas: Uma novela do universo de Corte de espinhos e rosas: 4</p>
                    <p className="text-gray-500 text-sm">por Sarah J. Maas e Mariana Kohnert</p>
                    <p className="text-gray-500 text-sm">Capa comum</p>
                    <p className="text-gray-500 text-sm"><span className="text-black text-xs">R$</span><span className="text-black text-xl">30</span><span className="text-xs text-black">99</span> <span className="line-through">R$54,90</span></p>
                    <p className="text-blue-500 font-bold text-sm flex items-center"><BiCheck className="text-orange-500" size={18} />prime</p>
                </div>
            </div>
        </>
    )
}