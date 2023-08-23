export default function FirstSectionFooter() {
    return (
        <>
            <div className="bg-gray-800 text-neutral-300 flex flex-col justify-center items-center px-10 py-2">
                <h1 className="mb-4 text-2xl font-extrabold text-white border-b-2 border-orange-500">amazon</h1>
                <div className="w-5/6 text-center">
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Austrália</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Alemanha</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Canadá</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">China</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Cingapura</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Espanha</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Estados Unidos</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">França</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Holanda</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Índia</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Itália</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Japão</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">México</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Polônia</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Emirados Árabes Unidos</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Reino Unido</a>
                    <a className="text-xs px-2 cursor-pointer hover:underline">Turquia</a>
                    <p className="text-xs pt-2">E não se esqueça:</p>
                    <a className="text-xs cursor-pointer hover:underline">Amazon Web Services</a>

                </div>
            </div>
            <div className="bg-gray-950  text-neutral-300 flex flex-col justify-center items-center">
                <div>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Condição de uso</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Notificações de Privacidade</a>
                    <a className="text-xs border-r px-2 cursor-pointer hover:underline">Coockies</a>
                    <a className="text-xs px-2 cursor-pointer hover:underline">Anúncios Baseados em Interesses</a>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                    <p className="text-xs">© 2021-2023 Amazon.com, Inc. ou suas afiliadas</p>
                    <p className="text-xs text-neutral-500">Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
                    <p className="text-xs text-neutral-500">Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011| Fale conosco| ajuda-amazon@amazon.com.br
                    </p>
                    <p className="text-xs text-neutral-500 mb-10">Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.
                    </p>
                </div>
            </div>
        </>
    )
}