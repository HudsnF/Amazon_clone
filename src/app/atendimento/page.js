'use client'
import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";
import FirstSectionAtendimento from "./FirstSectionAtendimento";
import SecondSectionAtendimento from "./SecondSectionAtendimento";

export default function atendimento() {
    return (
        <div>
            <Navbar />
            <div className="bg-neutral-100">
                <FirstSectionAtendimento/>
                <SecondSectionAtendimento/>
            </div>
            <Footer />
        </div>

    )
}