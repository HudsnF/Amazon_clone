import { BiSearch } from "react-icons/bi";

export default function SecondSectionAtendimento() {
    return(
        <div>
            <div className="mt-8 ml-4">
                <p className="font-bold text-lg">Pesquise na nossa biblioteca de ajuda</p>

                <div className="flex items-center gap-2 my-4 mb-8 ">
                    <label><BiSearch /></label>
                    <input typeof="text" placeholder="Digite algo como 'pergunta sobre uma cobrança'" className="w-full border border-neutral-400 text-sm p-1 rounded shadow-md focus:shadow-sky-500 focus:border-neutral-400">
                    </input>

                </div>
            </div>
            <p className="font-bold text-lg m-4">Todos os tópicos de ajuda</p>
            <div className="flex pb-20">
                <div className="flex flex-col gap-1 text-black font-bold text-sm px-4 w-1/5">
                    <button className="rounded bg-cyan-700 text-neutral-100 p-2 text-start">Tópicos recomendados</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Onde está meu pedido?</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Envios e entregas</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Amazon Prime</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Devoluções e Reembolsos</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Gerenciando Sua conta</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Seguraça e Privacidade</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Pagamento, preços e promoções</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Dispositivos e Serviços Digitais</button>
                    <button className="rounded hover:bg-neutral-200 p-2 text-start">Outros tópicos e páginas de Ajuda</button>
                </div>
                <div className="grid grid-cols-2 gap-4 w-3/4 ml-8">
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Rastear seu pacote</p>
                        <p className="text-xs text-neutral-500">Você pode encontrar as informações de rastreamento nos detalhes do seu pedido. Se um pedido incluir vários produtos, cada um pode ter datas ...</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Não recebeu o pedido, mas status indica entregue?</p>
                        <p className="text-xs text-neutral-500">A maioria dos pacotes chega no prazo, mas, às vezes, o rastreamento pode indicar “entregue” e você não recebeu o pacote.</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Entregas atrasadas</p>
                        <p className="text-xs text-neutral-500">A maioria dos pacotes chega a tempo. Às vezes, os pedidos são entregues após a data estimada de entrega.</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Frete e prazo de entrega</p>
                        <p className="text-xs text-neutral-500">Saiba mais sobre Frete e Prazos de entrega</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Cancelar itens ou pedidos</p>
                        <p className="text-xs text-neutral-500">Você pode cancelar itens ou pedidos que ainda não entraram em processo de envio</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Devolver itens que você comprou</p>
                        <p className="text-xs text-neutral-500">Produtos vendidos na Amazon podem ser devolvidos. Há diferentes opções de devolução, dependendo do vendedor do produto ou do...</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Verificar o status do seu reembolso</p>
                        <p className="text-xs text-neutral-500">Você pode verificar o status do seu reembolso em <span className="font-bold">Seus Pedidos</span>.</p>
                    </div>
                    <div className="bg-white p-4 border border-neutral-200 rounded flex flex-col justify-center hover:bg-neutral-100 cursor-pointer">
                        <p>Amazon Prime</p>
                        <p className="text-xs text-neutral-500">O Amazon Prime é uma assinatura mensal ou anual com vários benefícios, incluindo frete rápido GRÁTIS ou com desconto para compras elegíveis, streaming de filmes, séries de TV e música, ofertas de ...</p>
                    </div>

                </div>
            </div>
        </div>
    )

}