import Image from "next/image"

export default function SecondSection() {
    return (
        <>
            <div className="bg-white p-4 font-bold text-xl mx-6">
                <h2>Navegue por categoria</h2>
                <div className="flex justify-center gap-4 p-4 text-sm text-center text-neutral-700">
                    <div className="rounded-t-full overflow-hidden">
                        <Image src="/dispositivos.jpg" width={200} height={500} />
                        <p className="mt-3">Dispositivos Amazon</p>
                    </div>
                    <div className="rounded-t-full overflow-hidden">
                        <Image src="/livros.jpg" width={200} height={500} />
                        <p className="mt-3">Livros</p>
                    </div>
                    <div className="rounded-t-full overflow-hidden">
                        <Image src="/ebooks.jpg" width={200} height={500} />
                        <p className="mt-3">eBooks</p>
                    </div>
                    <div className="rounded-t-full overflow-hidden">
                        <Image src="/computadores.jpg" width={200} height={500} />
                        <p className="mt-3">Computadores e Informática</p>
                    </div>
                    <div className="rounded-t-full overflow-hidden">
                        <Image src="/cuidados.jpg" width={200} height={500} />
                        <p className="mt-3">Cuidados Pessoais</p>
                    </div>
                    <div className="rounded-t-full overflow-hidden">
                        <Image src="/games.jpg" width={200} height={500} />
                        <p className="mt-3">Games e Consoles</p>
                    </div>
                </div>
            </div>
        </>
    )
}