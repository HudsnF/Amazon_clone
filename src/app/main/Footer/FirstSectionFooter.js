export default function FirstSectionFooter(){
    return(
        <>
            <div className="flex justify-center text-neutral-300 bg-gray-800 py-12 text-sm gap-x-10 border-b border-gray-700">
                <div className="w-2/12 leading-6 flex flex-col gap-1">
                    <h3 className="font-bold mb-2 text-base">Conheça-nos</h3>
                    <a className="cursor-pointer hover:underline">Informações corporativas</a>
                    <a className="cursor-pointer hover:underline">Carreiras</a>
                    <a className="cursor-pointer hover:underline">Comunicados à imprensa</a>
                    <a className="cursor-pointer hover:underline">Comunidade</a>
                    <a className="cursor-pointer hover:underline">Acessibilidade</a>
                    <a className="cursor-pointer hover:underline">Amazon Science</a>
                </div>
                <div className="w-2/12 leading-6 flex flex-col gap-1">
                    <h3 className="font-bold mb-2 text-base">Ganhe dinheiro conosco</h3>
                    <a className="cursor-pointer hover:underline">Venda na Amazon</a>
                    <a className="cursor-pointer hover:underline">Proteja e construa a sua marca</a>
                    <a className="cursor-pointer hover:underline">Publique seus livros</a>
                    <a className="cursor-pointer hover:underline">Seja um associado</a>
                    <a className="cursor-pointer hover:underline">Anuncie seus produtos</a>
                </div>
                <div className="w-2/12 leading-6 flex flex-col gap-1">
                    <h3 className="font-bold mb-2 text-base">Pagamento</h3>
                    <a className="cursor-pointer hover:underline">Meios de Pagamento</a>
                    <a className="cursor-pointer hover:underline">Compre com Pontos</a>
                </div>
                <div className="w-2/12 leading-6 flex flex-col gap-1">
                    <h3 className="font-bold mb-2 text-base">Deixe-nos ajudar você</h3>
                    <a className="cursor-pointer hover:underline">Amazon e COVID-19</a>
                    <a className="cursor-pointer hover:underline">Sua conta</a>
                    <a className="cursor-pointer hover:underline">Frete e prazo de entrega</a>
                    <a className="cursor-pointer hover:underline">Devolução e reembolsos</a>
                    <a className="cursor-pointer hover:underline">Gerencie seu conteúdo e dispositivos</a>
                    <a className="cursor-pointer hover:underline">Ajuda</a>
                </div>
            </div>
        </>
    )
}